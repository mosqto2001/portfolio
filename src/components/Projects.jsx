import React from "react";
import ProjectDetail from "./ProjectDetail"

export default function Projects() {
  const projects = [
    {name: "MEOW RUN", description: "ENDLESS RUNNER ONLINE GAME", buttonText:"PLAY NOW", link:"https://meowrun.site/"}
  ]

  return (
    <div>
       <h1 className="text-3xl font-bold sm:text-6xl tracking-wider text-center">MY PROJECTS</h1>
       <ProjectDetail project={projects[0]}/>
    </div>
  );
}
