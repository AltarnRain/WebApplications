import * as React from "react";
import { bindActionCreators, Dispatch, ActionCreator } from "redux";
import { connect, MapStateToProps } from "react-redux";
import UserDetailProperties from "../Interfaces/UserDetailProperties";
import State from "../Interfaces/State";
import UserDetail from "../Components/user-details";

const mapStateToProps = (state: State): UserDetailProperties => {
    const userDetailProperties = {
        user: state.user,
    } as UserDetailProperties;

    return userDetailProperties;
};

export default connect(mapStateToProps)(UserDetail);
