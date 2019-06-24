import * as actionType from '../actions/actionTypes';

const initialState = {
    manufacturerList: [],
    isLoading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH_MANUFACTURE:
            return {
                ...state,
                isLoading: true
            };
        case actionType.FETCH_MANUFACTURE_SUCCESS:
            let list = action.payload.data.manufacturers.map((item) => {
                return item.name
            })
            return {
                ...state,
                isLoading: false,
                manufacturerList: list,
            };
        case actionType.FETCH_MANUFACTURE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        
        default: return state;
    }
}