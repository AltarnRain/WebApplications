import User from "./User";
import SelectUserAction from "./SelectUserAction";

interface UserListProperties {
    users: User[];
    selectUser: (user: User) => SelectUserAction;
}

export default UserListProperties;