import * as actionType from '../actions/actionTypes';
import { withAsyncLoadable } from './asyncHOR';

const initialState = {
    colorList: [],
    isLoading: false,
    error: null
}

const baseColorReducer =  (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH_COLORLIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                colorList: action.payload,
            };
        default: return state;
    }
}

let colorReducer = withAsyncLoadable({
    isLoadingAction: 'FETCH_COLORLIST',
    successAction: 'FETCH_COLORLIST_SUCCESS',
    errorAction: 'FETCH_COLORLIST_FAILURE',
})(baseColorReducer)

export default colorReducer;