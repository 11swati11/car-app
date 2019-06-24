import * as actionType from '../actions/actionTypes';

const initialState = {
    carList: [],
    isLoading: false,
    noOfPages: '10',
    error: {}
}


export default (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH_CARLIST:
            return {
                ...state,
                isLoading: true
            };
        case actionType.FETCH_CARLIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                carList: action.payload,
                noOfPages: action.pageCount
            };
        case actionType.FETCH_CARLIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default: return state;
    }
}