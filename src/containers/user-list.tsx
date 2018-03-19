import * as React from "react";
import { bindActionCreators, Dispatch, ActionCreator } from "redux";
import { connect, MapStateToProps } from "react-redux";
import State from "../Interfaces/State";
import UserListProperties from "../Interfaces/UserListProperties";
import SelectUserAction from "../Interfaces/SelectUserAction";
import User from "../Interfaces/User";
import selectUser from "../Actions";

// This interface is only used in this container.
interface SelectUserActionCreator extends ActionCreator<any> {
    selectUser: (user: User) => SelectUserAction;
}

class UserList extends React.Component<UserListProperties> {

    public static mapStateToProps(state: State): UserListProperties {
        const userListProperties = {
            Users: state.Users,            
        } as UserListProperties;

        return userListProperties;
    }

    public static mapDispatchToProps(dispatch: Dispatch<any>): SelectUserActionCreator {
        const creator = {
            selectUser: selectUser
        } as SelectUserActionCreator;
        return bindActionCreators(creator, dispatch);
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
                <li onClick={() => this.props.selectUser(user)} key={user.id}>{user.first} {user.last}</li>
            );
        });
    }
}

export default connect(UserList.mapStateToProps, UserList.mapDispatchToProps)(UserList);