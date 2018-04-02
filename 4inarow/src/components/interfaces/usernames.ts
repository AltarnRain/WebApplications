import SetPlayerAction from "../../store/interfaces/setplayer-action";

interface UserNames {
    playerOne: string;
    playerTwo: string;
    setPlayerName: (name: string) => SetPlayerAction;
}

export default UserNames;