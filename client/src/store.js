import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}


export default (initialState) => {
    return createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(logger, thunkMiddleware)
        )
    )
}