import { SetPlayerAction } from "../interfaces/setplayer-action";

export function setPlayerReducer(state: string = "", action: SetPlayerAction): string {
    switch (action.type) {
        case "SET_PLAYER":
            return action.playerName;
        default:
            return state;
    }
}