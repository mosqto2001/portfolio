import React from "react";
import SkillCard from "./SkillCard";
import IconComputer from "../icons/IconComputer";
import IconBrush from "../icons/IconBrush";
import IconGame from "../icons/IconGame";

const skillCards = [
  {name:"Website Develop",
  icon:IconComputer,
  description:"Create websites with<br/> Vue.js<br/> React.js <br/> Node.js <br/>Socket.io <br/>Tailwind <br/>Bootstrap"  
},
{name:"Web Design",
icon:IconBrush,
  description:"Design websites with<br/> Figma<br/> Adobe Illustrator<br/> Adobe Photoshop"  
},
{name:"Game Develop",
icon:IconGame,
  description:"Create browser games with<br/> Kaboom.js<br/> Phaser.js"   
}
]

export default function Profile() {

  return (
    <section className="relative bg-dark-900 profile z-20">
      <div className="max-w-screen h-[20px] bg-yellow-100 profile"></div>
      <div className="max-w-screen-xl px-4 mx-auto lg:items-center lg:flex z-20">
        <div className="flex flex-col justify-center items-center max-w-3xl mx-auto text-center">
          <p className="mt-16 sm:mt-32 text-gray-200">
            My nickname is Mos. I'm interested in front-end development. <br />
            I'm experienced in developing web application, designing websites
            and developing a browser game.
          </p>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 pt-12">
            
            {/* <SkillCard skill={skillCards[0]}/> */}
            {skillCards.map((skill, i) => <SkillCard skill={skill} key={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
