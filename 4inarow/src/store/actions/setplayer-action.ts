import { SetPlayerAction } from "../interfaces/setplayer-action";

export function setPlayerAction(playerName: string): SetPlayerAction {
    return {
        type: "SET_PLAYER",
        playerName: playerName
    } as SetPlayerAction;
}