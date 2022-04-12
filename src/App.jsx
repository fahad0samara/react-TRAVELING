
import NavBar from './page/Navbar'
import './App.css'
import Hero from './page/Hero'
import Hero0 from './page/Hero0'
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
 const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
     <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <NavBar />
      <Hero />
      <Hero0/>
    </div>
  )
}

export default App
