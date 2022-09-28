import { useState,useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

// const scroll = (page) => {
//   console.log(page)
//   const section = document.querySelector( page );
//   section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
// };

function App() {
  const [count, setCount] = useState("1.jpg");

  //parallax


  return (
    
    <Router>
      <div className="app text-sm sm:text-md text-gray-200 w-full">
        <Navbar className="sticky top-0" />
        {/* <img src={`./images/work/${count}`} /> */}
        {/* <Routes>
          <Route path="/" exact />
          <Route path="/price"  />
          <Route path="/artwork" />
          <Route path="/" exact element={<Home/>} />
      </Routes> */}

        <Home className="home" />
        <Profile className="profile"/>
        {/* <div className="profile">
          <p>dsadsadadsd</p>
        </div> */}
        <Projects className="projects"/>
        <div className="projects">
          <p>dsadsadadsd</p>
        </div>
      </div>
  
    </Router>
  
  );
}

export default App;
