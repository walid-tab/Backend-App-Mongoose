import {combineReducers} from "redux"
import userReducer from "./userReducer"
const routeReducer = combineReducers({userReducer})
export default routeReducer;