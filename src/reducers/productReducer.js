import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_FORMAT, ORDER_PRODUCTS_BY_PRICE} from "../actions/types";

const initialState = { items: [], filteredItems: [], fformat: ''}
export default function (state=initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {...state, items: action.payload, filteredItems: action.payload}
        case FILTER_PRODUCTS_BY_FORMAT:
            return {...state, filteredItems: action.payload.items, fformat: action.payload.fformat}
        case ORDER_PRODUCTS_BY_PRICE:
            return {...state, filteredItems: action.payload.items,
                sort: action.payload.fformat}
        default:
            return state
    }
}