import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UsersProvider } from "./context/UsersContext.tsx";
import { FilteredUsersProvider } from "./context/FilteredUsersContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <UsersProvider>
                <FilteredUsersProvider>
                    <App />
                </FilteredUsersProvider>
            </UsersProvider>
        </BrowserRouter>
    </React.StrictMode>
);
