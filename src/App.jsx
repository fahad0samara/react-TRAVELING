
import NavBar from './page/Navbar'

import Hero from './page/Hero'
import Swiper from './page/Swiper'
import Hero0 from './page/Hero0'
import { useContext } from "react";
import { themeContext } from "./Context";
import Hero2 from './page/Hero2';
import Hero4 from './page/Hero4';
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
      <Hero0 />
      <Swiper />
      <Hero2 />
      <Hero4/>
    </div>
  )
}

export default App
