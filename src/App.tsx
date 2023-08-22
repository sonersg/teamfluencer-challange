import { useState } from "react";
import "./App.css";
import Users from "./components/Users";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <Users />
        </div>
    );
}

export default App;
