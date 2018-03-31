import UserListProperties from "../Interfaces/UserListProperties";
import * as React from "react";

class UserList extends React.Component<UserListProperties> {

    public render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        );
    }

    private createListItems(): JSX.Element[] {
        return this.props.users.map((user) => {
            return (
                <li onClick={() => this.props.selectUser(user)} key={user.id}>{user.first} {user.last}</li>
            );
        });
    }
}

export default UserList;