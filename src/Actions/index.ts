import User from "../Interfaces/User";
import SelectUserAction from "../Interfaces/SelectUserAction";

const selectUser = (user: User): SelectUserAction => {
    console.log("You clicked on user: " + user.first);
    return {
        type: "USER_SELECTED",
        payload: user,
    } as SelectUserAction;
};

export default selectUser;