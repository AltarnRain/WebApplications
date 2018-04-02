import { connect } from "react-redux";
import State from "../store/state";
import UserNames from "../components/interfaces/usernames";
import InputPlayerNames from "../components/inputplayernames";
import { Dispatch, bindActionCreators } from "redux";
import setPlayerAction from "../store/actions/setplayer-action";

function mapStateToProps (state: State): UserNames {
    return {
        playerOne: state.playerOne,
        playerTwo: state.playerTwo
    } as UserNames;
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
    const creator = {
        setPlayerAction: setPlayerAction
    };

    return bindActionCreators(creator, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InputPlayerNames);
