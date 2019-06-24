import manufacture from "../manufactureReducer";
import * as actionType from "../../actions/actionTypes";
import manufacturerData from '../../__mocks__/manufacturerData';

const initialState = {
    manufacturerList: [],
    isLoading: false
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
                    isLoading: false
                },
                {
                    type: actionType.FETCH_MANUFACTURE
                }
            )
        ).toEqual({
            manufacturerList: [],
            isLoading: true
        });
    });

    it("should handle FETCH_MANUFACTURE_SUCCESS", () => {
        expect(
            manufacture(
                {
                    manufacturerList: [],
                    isLoading: true
                },
                {
                    type: actionType.FETCH_MANUFACTURE_SUCCESS,
                    payload: {
                        data: manufacturerData
                    }
                }
            )
        ).toEqual({
            manufacturerList: ["Audi", "BMW", "Chrysler", "Dodge", "Fiat", "Mercedes-Benz", "Porsche", "Skoda", "Tesla", "Volkswagen"],
            isLoading: false
        });
    });

    it("should handle error handling with FETCH_MANUFACTURE_FAILURE", () => {
        expect(
            manufacture(
                {
                    isLoading: true,
                    error: {},
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