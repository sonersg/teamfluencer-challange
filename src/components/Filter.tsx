import { useContext, useState, useEffect } from "react";
import { UsersContext } from "../context/UsersContext";
import { UserDoc } from "../types/User-Model-Challenge";
import { FilteredUsersContext } from "../context/FilteredUsersContext";

function Filter() {
    const [input, setInput] = useState("");
    const { users } = useContext(UsersContext);
    const { setFilteredUsers } = useContext(FilteredUsersContext);

    /////////////////////////////////////////////////////
    ////////// FILTER FUNCTION START
    //////////////////////////////////////////////////////

    interface User {
        userDoc: UserDoc;
    }

    const filterUsersArray = (
        usersArray: User[],
        searchString: string
    ): User[] => {
        const filteredArray: User[] = [];

        const searchInObject = (obj: Record<string, any>): boolean => {
            for (const key in obj) {
                const value = obj[key];

                if (typeof value === "object" && value !== null) {
                    if (searchInObject(value)) {
                        return true;
                    }
                } else {
                    const stringValue = String(value);
                    if (stringValue.includes(searchString)) {
                        return true;
                    }
                }
            }
            return false;
        };

        usersArray.forEach(user => {
            if (searchInObject(user.userDoc)) {
                filteredArray.push(user);
            }
        });

        return filteredArray;
    };

    /////////////////////////////////////////////////////
    ////////// FILTER FUNCTION END
    //////////////////////////////////////////////////////

    const searchString = input.toLocaleLowerCase();
    const filteredUsers = filterUsersArray(users, searchString);

    // Set filtered users array in filtered users context
    useEffect(() => {
        setFilteredUsers(filteredUsers);
    }, [input]);

    return (
        <div className="filter-container">
            <label htmlFor="filter">Filter through users.</label>
            <input
                type="text"
                id="filter"
                placeholder="Search"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
        </div>
    );
}

export default Filter;
