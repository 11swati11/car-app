import color from "../colorReducer";
import * as actionType from "../../actions/actionTypes";

const initialState = {
    colorList: [],
    isLoading: false
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
                    isLoading: false
                },
                {
                    type: actionType.FETCH_COLORLIST
                }
            )
        ).toEqual({
            colorList: [],
            isLoading: true
        });
    });

    it("should handle FETCH_COLORLIST_SUCCESS", () => {
        expect(
            color(
                {
                    colorList: [],
                    isLoading: true
                },
                {
                    type: actionType.FETCH_COLORLIST_SUCCESS,
                    payload: {
                        data: {
                            colors: colorList
                        }
                    }
                }
            )
        ).toEqual({
            colorList: colorList,
            isLoading: false
        });
    });

    it("should handle error handling with FETCH_COLORLIST_FAILURE", () => {
        expect(
            color(
                {
                    isLoading: true,
                    error: {},
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