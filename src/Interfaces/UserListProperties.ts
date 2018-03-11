import User from "./User";
import SelectUserAction from "./SelectUserAction";

interface UserListProperties {
    Users: User[];
    selectUser: (user: User) => SelectUserAction;
}

export default UserListProperties;