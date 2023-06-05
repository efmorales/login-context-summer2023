import React, { useContext, useState } from 'react'
import { ThemeContext } from "../../context/ThemeContext";
import { LoginContext, LoginDispatchContext } from "../../context/LoginContext";
import "./Login.css"

const Login = () => {
    // consume theme context
    const { theme } = useContext(ThemeContext);
    // consume login context
    const login = useContext(LoginContext);
    const dispatch = useContext(LoginDispatchContext);
    const [input, setInput] = useState({
        username: '',
        password: '',
    });

    const onChangeHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className={theme}>
            <h2> {login.message}</h2>
            {
                login.isAuth ?

                    <button onClick={
                        () => dispatch({
                            type: 'logout',
                        })
                    }>Logout</button>

                    :
                    <>
                        <label htmlFor='username'>Username</label>
                        <input
                            type='text'
                            name='username'
                            value={input.username}
                            onChange={onChangeHandler}
                        />
                        {/* <p>{input.username}</p> */}
                        <br />
                        <label htmlFor='password'> Password </label>
                        <input
                            type='password'
                            name='password'
                            value={input.password}
                            onChange={onChangeHandler}
                        />
                        <br />
                        <button>Register</button>
                        <br />
                        <button onClick={
                            () => dispatch({
                                type: 'login',
                                data: input
                            })
                        }>Login</button>


                    </>
            }
        </div>
    )
}

export default Login