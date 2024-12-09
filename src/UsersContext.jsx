
import React, {createContext, useState} from "react";

export const UsersContext = createContext();

export const UsersProvider = ({children}) => {
    const [usersName, setUsersName] = useState({
        firstPlayer:"",
        secondPlayer:""
    }

    );


    return <UsersContext.Provider value={{usersName,setUsersName}}>
        {children}
    </UsersContext.Provider>;
}