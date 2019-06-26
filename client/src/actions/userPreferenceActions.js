import * as actionType from "./actionTypes";

export const markFavourite = (id) => ({
    type: actionType.MARK_FAVOURITE,
    id
})

export const markUnFavourite = (id) => ({
    type: actionType.MART_UN_FAVOURITE,
    id
})