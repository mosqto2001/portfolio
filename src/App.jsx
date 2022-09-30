import { useState,useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import Footer from "./components/Footer";

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
      <div className="app text-xs font-light sm:text-sm text-gray-200 w-full">
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
        <Awards className="awards"/>
        <Footer className="footer"/>
      </div>



    </Router>
  
  );
}

export default App;
