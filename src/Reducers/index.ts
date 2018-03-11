import { combineReducers } from "redux";
import UserReducer from "./reducer-user";
import { Reducers } from "../interfaces";

const reducers = {} as Reducers;
reducers.Users = UserReducer;

const allReducers = combineReducers(reducers);

export default allReducers;