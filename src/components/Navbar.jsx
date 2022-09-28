import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";

const scroll = (page) => {
  console.log(page);
  const section = document.querySelector(page);
  section.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Navbar() {
  const effectUsed = useRef(false);
  const [selectedNav, setSelectedNav] = useState("home");
  const location = useLocation();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos && window.scrollY > 150) {
      setVisible(true);
    } else {
      setVisible(false);
    }

    setPrevScrollPos(currentScrollPos);
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
    <div className={`${visible === true ? "visible opacity-100" : "invisible opacity-0"} fixed top-0 w-full z-50 bg-dark-900 transition duration-1000`}>
      <nav className="">
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block ">
                <div className="sm:flex justify-between space-x-2">
                  <Link
                    to="/"
                    onClick={() => scroll(".home")}
                    className={`${
                      selectedNav == ""
                        ? "bg-gray-200 text-dark-900"
                        : "text-gray-200"
                    } px-8 py-2 rounded-md text-sm font-medium`}
                    aria-current="page"
                  >
                    Home
                  </Link>

                  <Link
                    to="/profile"
                    onClick={() => scroll(".profile")}
                    className={`${
                      selectedNav == "profile"
                        ? "bg-gray-200 text-dark-900"
                        : "text-gray-200"
                    } hover:text-dark-900 hover:bg-yellow-100 hover:text-white px-8 py-2 rounded-md text-sm font-medium`}
                  >
                    Profile
                  </Link>

                  <Link
                    to="/projects"
                    onClick={() => scroll(".projects")}
                    className={`${
                      selectedNav == "projects"
                        ? "bg-gray-200 text-dark-900"
                        : "text-gray-200"
                    } hover:text-dark-900 hover:bg-yellow-100 hover:text-white px-8 py-2 rounded-md text-sm font-medium`}
                  >
                    Projects
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
          </div>
        </div>
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 ">
            <Link
              to="/"
              onClick={() => scroll(".home")}
              className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page"
            >
              Dashboard
            </Link>
            <Link
              to="/price"
              onClick={() => scroll(".price")}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Team
            </Link>
            <Link
              to="/artwork"
              onClick={() => scroll(".artwork")}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
