import * as React from "react";
import InputPlayerName from "./containers/inputplayernames";

class MainApp extends React.Component {
  render() {
    return (
      <div>
        <InputPlayerName />
        <InputPlayerName />
      </div>
    );
  }
}

export default MainApp;