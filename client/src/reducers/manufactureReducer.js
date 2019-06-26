import * as actionType from '../actions/actionTypes';
import { withAsyncLoadable } from './asyncHOR';

const initialState = {
    manufacturerList: [],
    isLoading: false,
    error: null
}
const baseManufacturerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH_MANUFACTURE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                manufacturerList: action.payload,
            };
        default: return state;
    }
}


const manufacturerReducer = withAsyncLoadable({
    isLoadingAction: 'FETCH_MANUFACTURE',
    successAction: 'FETCH_MANUFACTURE_SUCCESS',
    errorAction: 'FETCH_MANUFACTURE_FAILURE',
})(baseManufacturerReducer);

export default manufacturerReducer;