import React, { useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext'

function Home() {
    const contextDefault = useContext(ThemeContext)
    return (

        <div>

            Home

            <h3>{contextDefault}</h3>

        </div>
    )
}

export default Home