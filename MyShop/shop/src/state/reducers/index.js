import {combineReducers} from "redux"
import accountReducer from "./../reducers/accountReducer"
import pageReducer from './../reducers/pageReducer';
import secondHeaderReducer from './../reducers/secondHeaderReducer';

const reducers = combineReducers({
  account: accountReducer,
  page : pageReducer,
  headerStatus: secondHeaderReducer,
})

export default reducers