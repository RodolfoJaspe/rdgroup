import "../../styles/main/App.css";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Portfolio from "./Portfolio";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import How from "./How";
import Videos from "./Videos.js";

function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
}, []);

return (
    <div className="App">
      {windowSize.innerWidth >= 500 ? <Navbar /> : <Menu />}
      <Home />
      <div className="main-content">
        <Portfolio />
        {/* <Videos /> */}
        <How />
        <About />
        <Contact />
      </div>
    </div>
  );
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default App;
