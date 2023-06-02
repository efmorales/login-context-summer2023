import { useState } from "react";
import './App.css';
import { ThemeContext } from "./context/ThemeContext";

import Home from "./components/Home/Home";

function App() {

  const [theme, setTheme] = useState('light');

  return (
    <div className="App">
      <ThemeContext.Provider value={{theme, setTheme}}>

        < Home />
        
      </ThemeContext.Provider>

    </div>
  );
}

export default App;
