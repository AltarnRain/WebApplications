import { ReducersMapObject, Reducer } from "redux";

export interface Reducers extends ReducersMapObject {
    playerOne: Reducer<string>;
    playerTwo: Reducer<string>;
}
