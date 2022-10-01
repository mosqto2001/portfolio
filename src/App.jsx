import { useState,useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Parallax,ParallaxLayer} from '@react-spring/parallax'
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
        {/* <Parallax pages={4}>
        <ParallaxLayer speed={0.5}>
          <Home className="home" />
</ParallaxLayer>
<ParallaxLayer offset={1} speed={1}>
          <Profile className="profile"/>
</ParallaxLayer>
        </Parallax> */}
     
        <Navbar className="sticky top-0" />
        <Home className="home" />
        <Profile className="profile"/>
        <Projects className="projects"/>
        <Awards className="awards"/>
        <Footer className="footer"/>
      </div>



    </Router>
  
  );
}

export default App;
