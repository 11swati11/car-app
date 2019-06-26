import * as actionType from '../actions/actionTypes';

const initialState = {
    favourites: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionType.MARK_FAVOURITE:
            return {
                ...state,
                favourites: [...state.favourites, action.id]
            };
        case actionType.MART_UN_FAVOURITE:
            let favouriteList = state.favourites.filter((favourite) => {
                return favourite !== action.id
            })
            return {
                ...state,
                favourites: favouriteList
            };
        default:
            return state
    }
}