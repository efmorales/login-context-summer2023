import { createContext, useReducer } from "react";


export const LoginContext = createContext(null);
export const LoginDispatchContext = createContext(null);

const initialState = {
    username: "",
    isAuth: false,
    message: "Please login",
};

export const LoginProvider = ({children}) => {
    const [login, dispatch] = useReducer(loginReducer, initialState);
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
        case 'login':
            if (action.data.password === 'abc') {
                return {
                    username: action.data.username,
                    isAuth: true,
                    message: `Welcome ${action.data.username}`
                }
            } else {
                return {
                    ...login,
                    message: "Incorrect password"
                };
            }
        default:
            return login;
    }
}