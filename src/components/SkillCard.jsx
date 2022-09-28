import React, {useState} from "react";


export default function SkillCard(props) {
  let [isShowDesc, setIsShowDesc] = useState(false);
  return (
            <div onMouseEnter={() => setIsShowDesc(true)} onMouseLeave={() => setIsShowDesc(false)} class="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] flex flex-col py-6 justify-center items-center border-2 border-gray-200 border-opacity-20 text-yellow-100 hover:bg-yellow-100 hover:text-dark-900 transition duration-300">
              {!isShowDesc ? <><props.skill.icon className="text-7xl" />
              <p class="mt-1 sm:text-lg">{props.skill.name}</p></> : <p class="mt-1 px-2" dangerouslySetInnerHTML={{__html: props.skill.description}}/> }
        
            </div>
  )
}