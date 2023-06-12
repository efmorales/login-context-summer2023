import React, { useContext, useEffect } from 'react'
import './Home.css'

import { ThemeContext } from '../../context/ThemeContext'
import { LoginContext } from "../../context/LoginContext";
import {checkAuthToken} from '../../lib/checkAuthToken'
function Home() {

    const {theme, setTheme, changeTheme} = useContext(ThemeContext)

    // function changeTheme () {
    //     theme === 'light' ? setTheme('dark') : setTheme ('light')
    // }

    const login = useContext(LoginContext);

    useEffect( () => checkAuthToken(), []);

    return (

        <div className={theme}>

            {
                login.isAuth ?
                <>
                
                Welcome to Home, {login.username}
                </>

                :

                <>
                Not user logged in
                </>
            }


            <h3>{theme}</h3>

            <button onClick={changeTheme}>Change theme</button>

        </div>
    )
}

export default Home