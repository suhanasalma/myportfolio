import React from 'react';
import mongo from '../../Assets/skills/icons-03.png'
import node from '../../Assets/skills/icons-02.png'
import react from '../../Assets/skills/icons-01.png'
import firebase from '../../Assets/skills/firebase.png'
import css from '../../Assets/skills/css.png'
import html from '../../Assets/skills/html.png'
import JavaScript from "../../Assets/skills/javascript.png";
import github from "../../Assets/skills/GitHub-Mark.png";
import tailwind from "../../Assets/skills/tailwind.jpg";
import bootstrap from "../../Assets/skills/bootstrap.png";
import './skills.css'

const Skills = () => {
   const skills = [
     {
       id: 1,
       img: css,
       name: "CSS 3",
     },
     {
       id: 2,
       img: html,
       name: "HTML 5",
     },
     {
       id: 3,
       img: JavaScript,
       name: "JavaScript",
     },
     {
       id: 4,
       img: react,
       name: "ReactJs",
     },
     {
       id: 5,
       img: node,
       name: "NodeJs",
     },
     {
       id: 6,
       img: firebase,
       name: "Firebase",
     },
     {
       id: 7,
       img: mongo,
       name: "MongoDb",
     },
     {
       id: 8,
       img: github,
       name: "Github",
     },
     {
       id: 9,
       img: tailwind,
       name: "Tailwind",
     },
     {
       id: 10,
       img: bootstrap,
       name: "Bootstrap",
     },
   ];
   return (
     <div className="lg:w-8/12 xl:w-6/12 mx-auto my-32">
       <h2 className="text-center font-bold text-4xl skill mb-10">Skills</h2>
       <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-auto w-10/12 ">
         {skills.map((skill) => (
           <div>
             <div className="w-32 bg-white h-32 object-cover flex items-center justify-center skill-img">
               <img loading="lazy" className="w-20 " src={skill.img} alt="" />
             </div>
             <p className='name mt-2'>{skill?.name}</p>
           </div>
         ))}
       </div>
     </div>
   );
};

export default Skills;