import { combineReducers } from "redux"

import stockItems from "./stockItemsReducer"
import userItems from "./userItemsReducer"

export default combineReducers({
    stockItems,
    userItems,
})
