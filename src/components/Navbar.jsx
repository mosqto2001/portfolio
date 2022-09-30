import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import IconMenu from "../icons/IconMenu"

const pages = ["introduce","projects","awards"]

const scroll = (page) => {
  console.log(page);
  const section = document.querySelector(page);
  section.scrollIntoView({ behavior: "smooth", block: "start" });
};

function getOffset(element) {
    const section = document.querySelector(element);
    const offset = section.getBoundingClientRect();
    return {
        top: offset.top + window.scrollY
      };
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

export default function Navbar() {
  const [selectedNav, setSelectedNav] = useState("introduce");
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();

  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setVisible(true);
      console.log(getOffset(".awards").top)
      console.log("s" + window.scrollY)
      if(window.scrollY <= getOffset(`.${pages[1]}`).top - 100){
        setSelectedNav(pages[0])
      }else if(window.scrollY <= getOffset(`.${pages[2]}`).top - 100){
        setSelectedNav(pages[1])
      }else {
        setSelectedNav(pages[2])
      }
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    const pathname = location.pathname;
    console.log("Location changed " + pathname.substring(1));

    setSelectedNav(pathname.substring(1));
  }, [location]);

  useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll",handleScroll)
}, []);
  //...
  return (
    <div onClick={() => {if(showNav) setShowNav(false)}} className={`${visible === true ? "visible opacity-100" : "invisible opacity-0"} fixed top-0 w-full z-50 bg-dark-900 transition duration-1000`}>
      <nav className="">
        <div className="mx-3 px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-10 w-auto"
                  src="./favicon.png"
                  alt="Logo"
                />
              </div>
              <div onClick={() => setShowNav(!showNav)} className="sm:hidden flex flex-shrink-0 items-center text-4xl">
              <IconMenu/>
              </div>
              <div className="hidden sm:ml-6 sm:block ">
                <div className="sm:flex justify-between space-x-2">
                {pages.map((page,index) => <Link
                    to={page==="introduce" ? "/": `/${page}`}
                    onClick={() => scroll(`.${page}`)}
                    className={`${
                      selectedNav === page || (page === "introduce" && selectedNav === "")
                        ? "bg-gray-200 text-dark-900"
                        : "text-gray-200"
                    } hover:text-dark-900 hover:bg-yellow-100 px-8 py-2 rounded-md text-sm font-medium`}
                    aria-current="page"
                    key={index}
                  >
                    {capitalizeFirstLetter(page)}
                  </Link>)}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
          </div>
        </div>
        <div className={`${showNav ? "" : "hidden"} sm:hidden `} id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 ">
          {pages.map((page,index) => 
                    <Link
             to={page==="introduce" ? "/": `/${page}`}
              onClick={() => scroll(`.${page}`)}
              className={`${
                selectedNav === page || (page === "introduce" && selectedNav === "")
                  ? "bg-gray-200 text-dark-900"
                  : "text-gray-200"
              } hover:text-dark-900 hover:bg-yellow-100 block px-3 py-2 rounded-md text-base font-medium`}
              aria-current="page"
              key={index}
            >
             {capitalizeFirstLetter(page)}
            </Link>
                )}
          
        
          </div>
        </div>
      </nav>
    </div>
  );
}
