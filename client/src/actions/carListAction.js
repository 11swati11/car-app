import axiosInstance from '../apis/axiosInstance';
import * as actionType from './actionTypes';

export const fetchCars = () => ({ type: actionType.FETCH_CARLIST });

export const fetchCarsSuccess = json => ({
    type: actionType.FETCH_CARLIST_SUCCESS,
    payload: json.cars,
    pageCount: json.totalPageCount
});

export const fetchCarsFailure = error => ({
    type: actionType.FETCH_CARLIST_FAILURE,
    error
});

export const requestCarList = (config = {}) => {
    return async dispatch => {
        dispatch(fetchCars());
        try {
            const response = await axiosInstance.get("/cars", {
                params: config
            });
            dispatch(fetchCarsSuccess(response.data));
        }
        catch (error) {
            dispatch(fetchCarsFailure(error));
        }
    }
}