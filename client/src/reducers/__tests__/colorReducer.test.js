import color from "../colorReducer";
import * as actionType from "../../actions/actionTypes";

const initialState = {
    colorList: [],
    isLoading: false,
    error: null
}
const colorList = ["red", "blue", "green", "black", "yellow", "white", "silver"];

describe("color Reducer", () => {
    it("should handle initial state", () => {
        expect(color(undefined, {})).toEqual(initialState);
    });

    it("should handle FETCH_COLORLIST", () => {
        expect(
            color(
                {
                    colorList: [],
                    isLoading: false,
                    error: null
                },
                {
                    type: actionType.FETCH_COLORLIST
                }
            )
        ).toEqual({
            colorList: [],
            isLoading: true,
            error: null
        });
    });

    it("should handle FETCH_COLORLIST_SUCCESS", () => {
        expect(
            color(
                {
                    colorList: [],
                    isLoading: true,
                    error: null
                },
                {
                    type: actionType.FETCH_COLORLIST_SUCCESS,
                    payload: colorList
                }
            )
        ).toEqual({
            colorList: colorList,
            isLoading: false,
            error: null
        });
    });

    it("should handle error handling with FETCH_COLORLIST_FAILURE", () => {
        expect(
            color(
                {
                    isLoading: true,
                    error: null,
                },
                {
                    type: actionType.FETCH_COLORLIST_FAILURE,
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