import * as actionType from '../actions/actionTypes';
import { withAsyncLoadable } from './asyncHOR';
const initialState = {
    carList: [],
    isLoading: false,
    noOfPages: 10,
    error: null
}

const baseCarReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH_CARLIST_SUCCESS:
            return {
                ...state,
                carList: action.payload,
                noOfPages: action.pageCount
            };
        default: return state;
    }
}

let carsReducer = withAsyncLoadable({
    isLoadingAction: 'FETCH_CARLIST',
    successAction: 'FETCH_CARLIST_SUCCESS',
    errorAction: 'FETCH_CARLIST_FAILURE',
})(baseCarReducer);

export default carsReducer;