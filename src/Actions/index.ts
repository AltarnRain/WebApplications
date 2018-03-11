import User from "../Interfaces/User";
import SelectUserAction from "../Interfaces/SelectUserAction";

export const selectUser = (user: User): SelectUserAction => {
    console.log("You clicked on user: " + user.first);
    return {
        type: "USER_SELECTED",
        payload: user
    } as SelectUserAction;
};