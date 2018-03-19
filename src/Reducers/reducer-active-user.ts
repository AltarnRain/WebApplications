import User from "../Interfaces/User";
import SelectUserAction from "../Interfaces/SelectUserAction";

const activeUser = (state: User, action: SelectUserAction): User | null => {
    switch (action.type) {
        case "USER_SELECTED":
            console.log("Active user set to: " + action.payload.first);
            return action.payload;        
        default:
            // nothing
    }

    return null;
};

export default activeUser;