import React from "react";
import ProjectDetail from "./ProjectDetail";
import IconVuejs from "../icons/IconVuejs";
import IconTailwind from "../icons/IconTailwind";
import IconNodejs from "../icons/IconNodejs";
import IconFirebase from "../icons/IconFirebase";
import IconGame from "../icons/IconGame";
import IconSpring from "../icons/IconSpring";
import IconMysql from "../icons/IconMysql";
import IconReact from "../icons/IconReact";
import IconSocket from "../icons/IconSocket";
import IconHeroku from "../icons/IconHeroku";
import IconFigma from "../icons/IconFigma";
import IconIllustrator from "../icons/IconIllustrator";

export default function Projects() {
  const projects = [
    {
      name: "MEOW RUN",
      description: "ENDLESS RUNNER ONLINE GAME",
      image:"meowrun",
      buttonText: "PLAY NOW",
      link: "https://meowrun.site/",
      about:
        "Meow Run is an online game which can be played on both computers and mobile devices. This game was launch in Open Beta on September 25. There are currently more than 250 players. In this game, players could run, jump and slide their way over obstacles. I am a front-end developer who developed this project by using Vue.js to design the user interface and Kaboom.js to construct the game.",
      features:["Endless running game which can be played on browser (chrome)","Responsive on both desktop and mobile","Player can choose and buy characters in Shop","Highscore ranking","Game settings","Sign up, login and email verification","This project use CRUD operations with Node.js backend"],
        skills: [{name:"Vue.js", type:"Frontend",icon:IconVuejs},{name:"Tailwind", type:"Frontend",icon:IconTailwind},{name:"Kaboom.js", type:"Game",icon:IconGame},{name:"Node.js", type:"Backend",icon:IconNodejs},{name:"Express.js", type:"Backend",icon:IconNodejs},{name:"Firebase", type:"Cloud",icon:IconFirebase}]
      ,video: "meowrun.mp4",github:"https://github.com/mosqto2001/meowrun2"
    },   {
      name: "MANA CLINIC",
      description: "EVENT SCHEDULING PLATFORM",
      image:"manaclinic",
      buttonText: "VISIT NOW",
      link: "https://intproj21.sit.kmutt.ac.th/or1/",
      about:
        "Mana Clinic is website for appointments event. User can create, edit and delete scheduled events. This project was developed by using Vue.js, Spring boot and MySQL. I am a front-end developer who create this website by using Vue.js and Tailwind CSS.",
      features:["Create, edit and delete scheduled events","Create, edit and delete scheduled event categories","Search event by filter","Input validation such as email and overlap of date/time validation ","Authentication token","This project use CRUD operations with Spring boot backend"],
        skills: [{name:"Vue.js", type:"Frontend",icon:IconVuejs},{name:"Tailwind", type:"Frontend",icon:IconTailwind},{name:"Spring boot", type:"Backend",icon:IconSpring},{name:"MySQL", type:"Database",icon:IconMysql},]
      ,video: "manaclinic.mp4",github:"https://github.com/Sprewwii/INT221-2021-OR-1"
    },{
      name: "MOSQTO PORTFOLIO",
      description: "MY FRONTEND PORTFOLIO",
      image:"mosqto",
      buttonText: "YOU ARE VISITING",
      about:
        "Mosqto Portfolio is my portfolio website which help you get to know me better. This website displays my introduction, skills, projects and awards. This website was developed by using React.js and Tailwind CSS.",
      features:["Introduce about myself","Display my projects details and awards","Responsive for mobile, tablet and desktop","I hope you will consider my portfolio and consider me for the position."],
        skills: [{name:"React.js", type:"Frontend",icon:IconReact},{name:"Tailwind", type:"Frontend",icon:IconTailwind},{name:"Firebase", type:"Cloud",icon:IconFirebase}]
      ,video: "mosqto.mp4",github:"https://github.com/mosqto2001/portfolio"
    },{
      name: "CHICK DUCK",
      description: "A MULTIPLAYER BROWSER GAME",
      image:"chickduck",
      buttonText: "PLAY NOW",
      link: "https://thawing-gorge-90803.herokuapp.com/",
      about:"Chick Duck is a multiplayer browser game. The player can see other players when joins a game, leaves a game or moves in real time. Additionally, players can murder another by using the skill. I created this game by using Phaser.js. Also, create a real time server by Node.js and Socket.io.",
      features:["The multiplayer game which can play on a browser (chrome)", "The player can see other players when joins a game, leaves a game or moves in real time","Player can murder another by using the skill"],
      skills: [{name:"Phaser.js", type:"Game",icon:IconGame},{name:"Node.js", type:"Backend",icon:IconNodejs},{name:"Socket.io", type:"Backend",icon:IconSocket},{name:"Heroku", type:"Cloud",icon:IconHeroku}]
      ,video: "chickduck.mp4",github:"https://github.com/mosqto2001/chickchickduck"
    },{
      name: "RAGNAROK REMAKE",
      description: "A SINGLEPLAYER BROWSER GAME",
      image:"ragnarok",
      buttonText: "PLAY NOW",
      link: "https://mmorpg-516d9.web.app/",
      about:"Ragnarok Remake is a single-player browser game. I make this game resemble a ragnarok online game. The player can walk around and fight enemies with their skills. This game was designed by myself in the pixel art style. I created this game by using Kaboom.js",
      features:["A single-player game which can play on a browser (chrome)", "The player can walk around and fight enemies with their skills","The player will die if their health is zero or below.","Press Arrow keys (⇧⇩⇦⇨) to move, spacebar to attack, Q and W to use skills"],
      skills: [{name:"Kaboom.js", type:"Game",icon:IconGame},{name:"Firebase", type:"Cloud",icon:IconFirebase}]
      ,video: "ragnarok.mp4",github:"https://github.com/mosqto2001/ragnarok"
    }
    ,{
      name: "HELLO WORLD 2021",
      description: "SIT CAMP FOR A FIRST-YEAR STUDENT",
      image:"helloworld",
      buttonText: "VISIT NOW",
      link: "https://helloworld-ermine.web.app/",
      about:"SIT Hello World is a camp designed to teach a first-year student in School of Information Technology about the front-end, website design, infrastructure, game development and game design. I am a staff in website design team. I use Figma and Adobe Illustrator to create a camp website. I also teach about UX/UI design, website elements and Adobe Illustrator. ",
      features:["I am staff of web design team which designed this website for camp recruiting", "Introduce the four teams: front-end, website design, infrastructure, game development and game design","In this camp, I teach about UX/UI design, website elements and Adobe Illustrator"],
      skills: [{name:"Figma", type:"Design",icon:IconFigma},{name:"Illustrator", type:"Design",icon:IconIllustrator}]
      ,video: "helloworld.mp4",github:"https://github.com/mosqto2001/meowrun2"
    },
     
  ];

  return (
    <div className=" projects pt-56 w-full flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold sm:text-6xl tracking-wider text-center">
        MY PROJECTS
      </h1>
 
      {projects.map((project,index) => <ProjectDetail project={project} key={index}/>)}
      
    </div>
  );
}
