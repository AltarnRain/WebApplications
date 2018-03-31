import User from "./User";

interface SelectUserAction {
    type: "USER_SELECTED";
    payload: User;
}

export default SelectUserAction;