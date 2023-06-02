import './App.css';
import { ThemeContext } from "./context/ThemeContext";

import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={'Hello world'}>

        < Home />
      </ThemeContext.Provider>

    </div>
  );
}

export default App;
