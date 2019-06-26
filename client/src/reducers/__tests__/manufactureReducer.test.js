import manufacture from "../manufactureReducer";
import * as actionType from "../../actions/actionTypes";
import manufacturerData from '../../__mocks__/manufacturerData';

const initialState = {
    manufacturerList: [],
    isLoading: false,
    error: null
}

describe("manufacture Reducer", () => {
    it("should handle initial state", () => {
        expect(manufacture(undefined, {})).toEqual(initialState);
    });

    it("should handle FETCH_MANUFACTURE", () => {
        expect(
            manufacture(
                {
                    manufacturerList: [],
                    isLoading: false,
                    error: null
                },
                {
                    type: actionType.FETCH_MANUFACTURE
                }
            )
        ).toEqual({
            manufacturerList: [],
            isLoading: true,
            error: null
        });
    });

    it("should handle FETCH_MANUFACTURE_SUCCESS", () => {
        expect(
            manufacture(
                {
                    manufacturerList: [],
                    isLoading: true,
                    error: null
                },
                {
                    type: actionType.FETCH_MANUFACTURE_SUCCESS,
                    payload: manufacturerData
                }
            )
        ).toEqual({
            manufacturerList: manufacturerData,
            isLoading: false,
            error: null
        });
    });

    it("should handle error handling with FETCH_MANUFACTURE_FAILURE", () => {
        expect(
            manufacture(
                {
                    isLoading: true,
                    error: null,
                },
                {
                    type: actionType.FETCH_MANUFACTURE_FAILURE,
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