import { ReducersMapObject, Reducer } from "redux";
import { SetPlayerAction } from "../interfaces/setplayer-action";

export interface Reducers extends ReducersMapObject {
    playerOne: Reducer<string>;
    playerTwo: Reducer<string>;
}
