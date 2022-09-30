import React from "react";
export default function ProjectAbout(props) {


  return (
    <div>
      <div class="max-w-lg mx-auto text-center lg:text-left lg:mx-0">
        <h2 class="text-3xl font-bold sm:text-4xl mt-4">About</h2>

        <p class="mt-4 ">{props.project.about}</p>
      </div>
      <div className="mt-10 flex justify-center sm:justify-start gap-3 sm:gap-6 text-xl sm:text-3xl text-white">
        {props.project.skills.map((skill,index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <skill.icon />
            <p className="text-[10px] sm:text-[12px]">{skill.name}</p>
            <p className="-mt-3 sm:-mt-5 text-yellow-100 text-[9px] sm:text-[12px]">{skill.type}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
