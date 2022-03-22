import {combineReducers} from "redux"
import accountReducer from "./../reducers/accountReducer"
import pageReducer from './../reducers/pageReducer';

const reducers = combineReducers({
  account: accountReducer,
  page : pageReducer
})

export default reducers