import * as React from "react";
import { bindActionCreators, Dispatch, ActionCreator } from "redux";
import { connect, MapStateToProps } from "react-redux";
import State from "../Interfaces/State";
import UserListProperties from "../Interfaces/UserListProperties";
import SelectUserAction from "../Interfaces/SelectUserAction";
import User from "../Interfaces/User";
import selectUser from "../Actions";
import UserList from "../Components/user-list";

// This interface is only used in this container.
interface SelectUserActionCreator extends ActionCreator<any> {
    selectUser: (user: User) => SelectUserAction;
}

const mapStateToProps = (state: State): UserListProperties => {
    const userListProperties = {
        users: state.users,
    } as UserListProperties;

    return userListProperties;
};

const mapDispatchToProps = (dispatch: Dispatch<any>): SelectUserActionCreator => {
    const creator = {
        selectUser: selectUser
    } as SelectUserActionCreator;
    return bindActionCreators(creator, dispatch);
};
   
export default connect(mapStateToProps, mapDispatchToProps)(UserList);