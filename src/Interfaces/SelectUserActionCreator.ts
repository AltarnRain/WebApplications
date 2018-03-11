import { ActionCreator } from "redux";
import User from "./User";
import SelectUserAction from "./SelectUserAction";

interface SelectUserActionCreator extends ActionCreator<any> {
    selectUser: (user: User) => SelectUserAction;
}

export default SelectUserActionCreator;