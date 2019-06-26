import carsDetails from "../carDetailReducer";
import * as actionType from "../../actions/actionTypes";

const initialState = {
    carDetails: {},
    isLoading: false,
    error: null
}

describe("Car Detail Reducer", () => {
    it("should handle initial state", () => {
        expect(carsDetails(undefined, {})).toEqual(initialState);
    });

    it("should handle FETCH_CARDETAILS", () => {
        expect(
            carsDetails(
                {
                    carDetails: {},
                    isLoading: false,
                    error: null
                },
                {
                    type: actionType.FETCH_CARDETAILS
                }
            )
        ).toEqual({
            carDetails: {},
            isLoading: true,
            error: null
        });
    });

    
    it("should handle error handling with FETCH_CARDETAILS_FAILURE", () => {
        expect(
            carsDetails(
                {
                    isLoading: true,
                    error: null
                },
                {
                    type: actionType.FETCH_CARDETAILS_FAILURE,
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