//import combineReducers
import {combineReducers} from "redux"

//import userReducer
import studentReducer from "./studentReducer"
import teacherReducer from "./teacherReducer"
import publicReducer from "./publicReducer"
//create rootReducer

const rootReducer = combineReducers({publicReducer, studentReducer, teacherReducer})

//export
export default rootReducer