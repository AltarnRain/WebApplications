
import { ReducersMapObject } from "redux";

export interface User {
    id: number;
    first: string;
    last: string;
    age: number;
    description: string;
    thumbnail: string;
}

export interface Reducers extends ReducersMapObject {
    Users: () => User[];
}

export interface State {
    Users: User[];
}