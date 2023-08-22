import { useState } from "react";
import "./App.css";
import Users from "./components/Users";
import Filter from "./components/Filter";
import { usersArray } from "./users/usersArray";
import { Route, Routes, useLocation } from "react-router-dom";
import UserDetailes from "./components/UserDetails";

function App() {
    const [users, setusers] = useState(usersArray);
    const location = useLocation();

    return (
        <div className="container">
            {location.pathname === "/" && <Filter />}

            <Routes>
                <Route path="" element={<Users />} />
                <Route path="/:id" element={<UserDetailes />} />
            </Routes>
        </div>
    );
}

export default App;
