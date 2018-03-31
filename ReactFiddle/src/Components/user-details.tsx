import * as React from "react";
import { bindActionCreators, Dispatch, ActionCreator } from "redux";
import { connect, MapStateToProps } from "react-redux";
import UserDetailProperties from "../Interfaces/UserDetailProperties";
import State from "../Interfaces/State";

class UserDetail extends React.Component<UserDetailProperties> {

    public render() {
        if (this.props.user) {
            return (
                <div>
                    Name: {this.props.user.first + " " + this.props.user.last} <br />
                    Age: {this.props.user.age} <br />
                    Desc: {this.props.user.description} <br />
                </div>
            );
        } else {
            return <h4>Select a user</h4>;
        }
    }
}

export default UserDetail;
