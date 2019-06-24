import * as actionType from '../actions/actionTypes';

const initialState = {
    colorList: [],
    isLoading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH_COLORLIST:
            return {
                ...state,
                isLoading: true
            };
        case actionType.FETCH_COLORLIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                colorList: action.payload.data.colors,
            };
        case actionType.FETCH_COLORLIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
  
        default: return state;
    }
}