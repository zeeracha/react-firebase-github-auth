import { createContext, useReducer, useEffect } from "react";
import { authReducers } from "../reducers/authReducers";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(authReducers, {
        user: null,
        authIsReady: false
    })

    console.log(state)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            dispatch({ type: "AUTH_IS_READY", payload:user})
        })
        return unsubscribe;
    },[])

    return (
        <AuthContext.Provider value={{ ...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;