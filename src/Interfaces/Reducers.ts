import { ReducersMapObject } from "redux";
import User from "./User";

interface Reducers extends ReducersMapObject {
    Users: () => User[];
}

export default Reducers;