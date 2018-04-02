import SetPlayerAction from "../interfaces/setplayer-action";

function setPlayerAction(playerName: string): SetPlayerAction {
    return {
        type: "SET_PLAYER",
        playerName: playerName
    } as SetPlayerAction;
}

export default setPlayerAction;