import { Context, useState, createContext } from 'react';
import axiosInstance from '../../utils/axios';
import { signIn } from './UserService';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const {children} = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const onSignIn = async (username, password) => {
        try {
            const res = await signIn(username, password);
            if (res.data.response_code == 1) {
                setIsLoggedIn(true);
                return true;
            } else {
                console.log(res.data.message);
                return false;
            }
        } catch (error) {
            console.log('On sign in error', error);
            return false;
        }
    }

    return(
        <UserContext.Provider value={{isLoggedIn, onSignIn}}>
            {children}
        </UserContext.Provider>
    )
}


