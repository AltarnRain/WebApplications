import { combineReducers } from "redux";
import UserReducer from "./reducer-user";
import Reducers from "../Interfaces/Reducers";
import activeUser from "./reducer-active-user";

const reducers = {
    users: UserReducer,
    user: activeUser,
} as Reducers;

const allReducers = combineReducers(reducers);

export default allReducers;