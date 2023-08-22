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

type UserContextType = {
    users: Users;
    setUsers: Dispatch<SetStateAction<Users>>;
};

export const UserContext = createContext<UserContextType>({
    users: usersArray,
    setUsers: () => {},
} as UserContextType);

// const UserContext = createContext<Partial<UserContextType>>({});

type UserProviderProps = {
    children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
    const [users, setUsers] = useState<Users>(usersArray);

    const values = {
        users,
        setUsers,
    };

    return (
        <UserContext.Provider value={values}>{children}</UserContext.Provider>
    );
};
