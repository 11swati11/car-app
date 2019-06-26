import axiosInstance from '../apis/axiosInstance';
import * as actionType from './actionTypes';

export const fetchManufacture = () => ({ type: actionType.FETCH_MANUFACTURE });

export const fetchManufactureSuccess = json => ({
    type: actionType.FETCH_MANUFACTURE_SUCCESS,
    payload: json
});

export const fetchManufactureFailure = error => ({
    type: actionType.FETCH_MANUFACTURE_FAILURE,
    error
});

export const requestManufacture = () => {
    return async dispatch => {
        dispatch(fetchManufacture());
        try {
            const response = await axiosInstance.get("/manufacturers");
            let selectableManufacturers = response.data.manufacturers.map((item) => {
                return { title: item.name, value: item.name }
            });
            selectableManufacturers = [{ title: "All Manufacturer", value: "" }, ...selectableManufacturers]
            dispatch(fetchManufactureSuccess(selectableManufacturers));
        }
        catch (error) {
            dispatch(fetchManufactureFailure(error));
        }
    }
}


export const fetchColorList = () => ({ type: actionType.FETCH_COLORLIST });
export const fetchColorListSuccess = json => ({
    type: actionType.FETCH_COLORLIST_SUCCESS,
    payload: json
});

export const fetchColorListFailure = error => ({
    type: actionType.FETCH_COLORLIST_FAILURE,
    error
});

export const requestColorList = () => {
    return async dispatch => {
        dispatch(fetchColorList());
        try {
            const response = await axiosInstance.get("/colors");
            let selectableColorList = response.data.colors.map((item) => {
                return { title: item, value: item }
            });
            selectableColorList = [{ title: "All Colors", value: "" }, ...selectableColorList]
            dispatch(fetchColorListSuccess(selectableColorList));
        }
        catch (error) {
            dispatch(fetchColorListFailure(error));
        }
    }
}

export const setColor = (name) => ({
    type: actionType.SET_COLOR,
    name
})

export const setManufacturer = (name) => ({
    type: actionType.SET_MANUFACTURER,
    name
})

export const setPage = (number) => ({
    type: actionType.SET_PAGE_NO,
    number
})

export const setOrder = (order) => ({
    type: actionType.SET_SORT_ORDER,
    order
})



