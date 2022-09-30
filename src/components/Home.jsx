import React from "react";
import { Link } from "react-router-dom"

const scroll = (page) => {
  console.log(page)
  const section = document.querySelector(page)
  section.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Home() {
  
  return (
    <section className="introduce text-gray-200 flex justify-center items-start z-10">
      
      <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold sm:text-6xl tracking-wider">
            PORTFOLIO
          </h1>

          <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl tracking-[.25em]">
            THANADOL WANGSIRISOMBOON
          </p>
          <p className="max-w-xl mx-auto mt-2 sm:leading-relaxed text-gray-400 sm:text-xl tracking-[.25em]">
            Front-End Developer
          </p>

          <Link to="/profile" onClick={() => scroll('.profile')}
  className="inline-block px-12 py-3 mt-6 text-sm font-medium text-yellow-100 border-2 border-yellow-100 rounded hover:bg-yellow-100 hover:text-dark-900"
>
  Get Started
</Link>
        </div>
      </div>
      <img src={"./images/cover/cover.png"} className="absolute top-12 w-full lg:w-3/5 opacity-40 z-10"/>
      
    </section>
  );
}
