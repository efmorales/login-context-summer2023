import React, { useContext } from 'react'
import './Home.css'

import { ThemeContext } from '../../context/ThemeContext'

function Home() {

    const {theme, setTheme} = useContext(ThemeContext)

    function changeTheme () {
        theme === 'light' ? setTheme('dark') : setTheme ('light')
    }

    return (

        <div className={theme}>

            Home

            <h3>{theme}</h3>

            <button onClick={changeTheme}>Change theme</button>

        </div>
    )
}

export default Home