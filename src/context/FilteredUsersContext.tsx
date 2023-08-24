import {
    useState,
    createContext,
    ReactNode,
    Dispatch,
    SetStateAction,
} from "react";
import { UserDoc } from "../types/User-Model-Challenge";
import { usersArray } from "../users/usersArray";

type Users = { userDoc: UserDoc }[];

type FilteredUsersContextType = {
    filteredUsers: Users;
    setFilteredUsers: Dispatch<SetStateAction<Users>>;
};

export const FilteredUsersContext = createContext<FilteredUsersContextType>({
    filteredUsers: usersArray,
    setFilteredUsers: () => {},
} as FilteredUsersContextType);

// const UserContext = createContext<Partial<UserContextType>>({});

type FilteredUsersProviderProps = {
    children: ReactNode;
};

export const FilteredUsersProvider = ({
    children,
}: FilteredUsersProviderProps) => {
    const [filteredUsers, setFilteredUsers] = useState<Users>(usersArray);

    const values = {
        filteredUsers,
        setFilteredUsers,
    };

    return (
        <FilteredUsersContext.Provider value={values}>
            {children}
        </FilteredUsersContext.Provider>
    );
};
