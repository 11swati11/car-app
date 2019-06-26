import * as actionType from '../actions/actionTypes';

const initialState = {
    manufacturer: "",
    color: "",
    page: 1,
    sort: "",
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_PAGE_NO:
            return { ...state, page: action.number };

        case actionType.SET_SORT_ORDER:
            return { ...state, sort: action.order };

        case actionType.SET_MANUFACTURER:
            return {
                ...state,
                manufacturer: action.name
            };

        case actionType.SET_COLOR:
            return {
                ...state,
                color: action.name
            };

        default:
            return state
    }
}
