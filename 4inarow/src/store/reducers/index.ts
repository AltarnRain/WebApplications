import { combineReducers } from "redux";
import { Reducers } from "../interfaces/reducers";
import { setPlayerReducer } from "./setplayer-reducer";

const reducers = {    
        playerOne: setPlayerReducer,
        playerTwo: setPlayerReducer,    
} as Reducers;

const allReducers = combineReducers(reducers);

export default allReducers;