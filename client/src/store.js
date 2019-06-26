import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const localStorageMiddleware = ({ getState }) => {
    return next => action => {
        const result = next(action);
        if (action.type.includes("MARK")) {
            localStorage.setItem("userFavourites", JSON.stringify(getState().userPref.favourites));
        }
        return result;
    };
};

const reHydrateStore = () => {
    let favourites = localStorage.getItem("userFavourites");
    if (favourites) {
        let ids = JSON.parse(favourites);
        return { userPref: {favourites:ids}}
    }
    return undefined;
}

export default () => {
    return createStore(
        rootReducer,
        reHydrateStore(),
        composeWithDevTools(
            applyMiddleware(thunkMiddleware, localStorageMiddleware)
        )
    )
}