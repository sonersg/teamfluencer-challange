import { useState } from "react";
import "./App.css";
import Users from "./components/Users";
import Filter from "./components/Filter";
import { usersArray } from "./users/usersArray";

function App() {
    const [users, setusers] = useState(usersArray);

    return (
        <div className="container">
            <Filter />
            <Users />
        </div>
    );
}

export default App;
