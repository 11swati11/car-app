import filter from "../filterReducer";
import * as actionType from "../../actions/actionTypes";

const initialState = {
    manufacturer: "",
    color: "",
    page: 1,
    sort: "asc"
}

describe("filter Reducer", () => {
    it("should handle initial state", () => {
        expect(filter(undefined, {})).toEqual(initialState);
    });

    it("should handle SET_PAGE_NO", () => {
        expect(
            filter(
                {
                    page: 1
                },
                {
                    type: actionType.SET_PAGE_NO,
                    number: 2
                }
            )
        ).toEqual({
            page: 2
        });
    });

    it("should handle SET_SORT_ORDER", () => {
        expect(
            filter(
                {
                    sort: "asc"
                },
                {
                    type: actionType.SET_SORT_ORDER,
                    order: "dsc"
                }
            )
        ).toEqual({
            sort: "dsc"
        });
    });


    it("should handle SET_MANUFACTURER", () => {
        expect(
            filter(
                {
                    manufacturer: ""
                },
                {
                    type: actionType.SET_MANUFACTURER,
                    name: "Audi"
                }
            )
        ).toEqual({
            manufacturer: "Audi"
        });
    });

    it("should handle SET_COLOR", () => {
        expect(
            filter(
                {
                    color: ""
                },
                {
                    type: actionType.SET_COLOR,
                    name: "Blue"
                }
            )
        ).toEqual({
            color: "Blue"
        });
    });

    
});