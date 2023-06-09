import React, { useState, useContext } from 'react'
import {ThemeContext} from '../../context/ThemeContext'
import {LoginContext, LoginDispatchContext} from '../../context/LoginContext'
import { fetchLogin, registerUser, logoutUser } from '../../context/loginContextHelper'
import {AuthContext, AuthDispatchContext} from '../../context/AuthContext'

import './Login.css'

//Make the register button work
//Need to send username and password the backend
// No logic in the backend right now, just return success message with username.

const Login = () => {
  //consume theme context  
  const {theme} = useContext(ThemeContext)

  //consume the login contexts
  const login = useContext(LoginContext)
  const dispatch = useContext(LoginDispatchContext)

  //consume the auth contexts

  const auth = useContext(AuthContext);
  const authDispatch = useContext (AuthDispatchContext);

  const [input, setInput] = useState({
    username: '',
    password: ''
  })
    
  const onChangeHandler = (e) => {
    setInput({
        ...input,
        [e.target.name]: e.target.value 
    })
  }

  return (
    <div id='login' className={theme}>
        {/* <h1>Please Login:</h1>  */}
        <h2>{login.message}</h2> 
        {/* isAuth = false -> 'User not Authorized'
        isAuth = true -> 'Welcome username' */}
        
        {
            auth.isAuth ? 
            <>
                <br></br>
                {/* Logout Button */}
                <button onClick={
                    () => {
                    logoutUser(dispatch, authDispatch);
                    // dispatch({type: 'logout'})
                    setInput({username: '',password: ''})
                    }
                }
                >
                    Logout
                </button>
            </>
            :
            <>
                <label htmlFor='username'>Username: </label>
                <input 
                    type='text'
                    name='username'
                    value={input.username}
                    onChange={onChangeHandler}
                /><br />
                <label htmlFor='password'>Password: </label>
                <input 
                    type='password'
                    name='password'
                    value={input.password}
                    onChange={onChangeHandler}
                /><br />
                <button onClick={
                    () => registerUser (dispatch, input)
                }>Register</button>
                <button onClick={ 
                    () => fetchLogin(dispatch, input, authDispatch)
                }>Login</button>
            </>           
        }

        </div>
  )
}

export default Login