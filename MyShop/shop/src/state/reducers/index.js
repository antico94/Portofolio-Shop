import {combineReducers} from "redux"
import accountReducer from "./../reducers/accountReducer"

const reducers = combineReducers({
  account: accountReducer
})

export default reducers