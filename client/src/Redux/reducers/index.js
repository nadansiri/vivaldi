//import combineReducers
import {combineReducers} from "redux"

//import userReducer
import studentReducer from "./studentReducer"
import teacherReducer from "./teacherReducer"
import publicReducer from "./publicReducer"
import userReducer from "./userReducer"
//create rootReducer
const rootReducer = combineReducers({publicReducer, studentReducer, teacherReducer, userReducer})

//export
export default rootReducer