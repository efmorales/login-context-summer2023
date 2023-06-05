import { useState } from "react";
import './App.css';
import { ThemeContext } from "./context/ThemeContext";
// import { LoginContext, LoginDispatchContext } from "./context/LoginContext";
import { LoginProvider } from "./context/LoginContext";

import Home from "./components/Home/Home";

function App() {

  const [theme, setTheme] = useState('light');

  function changeTheme() {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, setTheme, changeTheme }}>
        <LoginProvider>

          < Home />
          
        </LoginProvider>

      </ThemeContext.Provider>

    </div>
  );
}

export default App;
