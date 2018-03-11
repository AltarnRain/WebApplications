import * as React from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { State, User } from "../interfaces";

interface UserListProperties {
    Users: User[];
}

class UserList extends React.Component<UserListProperties> {

    public static mapStateToProps(state: State): UserListProperties {
        const userListProperties = {
            Users: state.Users
        } as UserListProperties;

        return userListProperties;
    }

    public render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        );
    }

    private createListItems(): JSX.Element[] {
        return this.props.Users.map((user) => {
            return (
                <li key={user.id}>{user.first} {user.last}</li>
            );
        });
    }

}

export default connect(UserList.mapStateToProps)(UserList);