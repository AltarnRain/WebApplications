import { ReducersMapObject } from "redux";
import User from "./User";
import SelectUserAction from "./SelectUserAction";

interface Reducers extends ReducersMapObject {
    users: () => User[];
    user: (state: User, action: SelectUserAction) => User;
}

export default Reducers;