import * as actionType from '../actions/actionTypes';
import { withAsyncLoadable } from './asyncHOR';

const initialState = {
    carDetails: {},
    isLoading: false,
    error: null
}

const baseCarDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH_CARDETAILS_SUCCESS:
            return {
                ...state,
                carDetails: {
                    ...state.carDetails, [action.payload.car.stockNumber]: action.payload.car
                },
            };
        default: return state;
    }
}

let carsDetailsReducer = withAsyncLoadable({
    isLoadingAction: 'FETCH_CARDETAILS',
    successAction: 'FETCH_CARDETAILS_SUCCESS',
    errorAction: 'FETCH_CARDETAILS_FAILURE',
})(baseCarDetailsReducer);

export default carsDetailsReducer;