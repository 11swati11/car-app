import cars from "../carsReducer";
import * as actionType from "../../actions/actionTypes";

const initialState = {
    carList: [],
    isLoading: false,
    noOfPages: '10',
    error: {}
}

describe("Cars Reducer", () => {
    it("should handle initial state", () => {
        expect(cars(undefined, {})).toEqual(initialState);
    });

    it("should handle FETCH_CARLIST", () => {
        expect(
            cars(
                {
                    carList: [],
                    isLoading: false,
                },
                {
                    type: actionType.FETCH_CARLIST
                }
            )
        ).toEqual({
            carList: [],
            isLoading: true
        });
    });

    it("should handle FETCH_CARLIST_SUCCESS", () => {
        expect(
            cars(
                {
                    carList: [],
                    isLoading: true,
                    noOfPages: '10'
                },
                {
                    type: actionType.FETCH_CARLIST_SUCCESS,
                    payload: [],
                    pageCount: '10'
                }
            )
        ).toEqual({
            isLoading: false,
            carList: [],
            noOfPages: '10'
        });
    });

    it("should handle error handling with FETCH_CARLIST_FAILURE", () => {
        expect(
            cars(
                {
                    isLoading: true,
                    error: {},
                },
                {
                    type: actionType.FETCH_CARLIST_FAILURE,
                    error: {
                        name: "Error",
                        message: "Request failed with status code 404"
                    }
                }
            )
        ).toEqual({
            isLoading: false,
            error: {
                name: "Error",
                message: "Request failed with status code 404"
            }
        });
    });
});