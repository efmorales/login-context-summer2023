import { createContext, useReducer } from "react";

export const LoginContext = createContext(null);
export const LoginDispatchContext = createContext(null);

export const LoginProvider = ({children}) => {
    const [login, dispatch] = useReducer(loginReducer, '');
    return (
    <LoginContext.Provider value={login}>
        <LoginDispatchContext.Provider value={dispatch}>
            {children}
        </LoginDispatchContext.Provider>
    </LoginContext.Provider>
    )
}

const loginReducer = (login, action) => {
    switch (action.type) {
        default:
            return login;
    }
}