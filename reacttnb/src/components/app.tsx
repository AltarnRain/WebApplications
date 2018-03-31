import * as React from "react";
import UserList from "../Containers/user-list";
import UserDetails from "../Containers/user-details";

const App = () => (
    <div>
        <h2>Username List:</h2>
        <UserList/>
        <hr />
        <h2>User detais:</h2>
        <UserDetails/>
    </div>
);

export default App;