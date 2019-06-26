import axiosInstance from "../apis/axiosInstance";
import * as actionType from "./actionTypes";

const fetchCarDetails = () => ({
    type: actionType.FETCH_CARDETAILS
});

const fetchCarDetailsSuccess = data => ({
    type: actionType.FETCH_CARDETAILS_SUCCESS,
    payload: data
});

const fetchCarDetailsFailure = error => ({
    type: actionType.FETCH_CARDETAILS_FAILURE,
    error
});

export const requestCarDetails = (id) => {
    return async dispatch => {
        dispatch(fetchCarDetails());
        try {
            let response = await axiosInstance.get(`/cars/${id}`);
            dispatch(fetchCarDetailsSuccess(response.data));
        } catch (error) {
            dispatch(fetchCarDetailsFailure(error));
        }
    };
};
