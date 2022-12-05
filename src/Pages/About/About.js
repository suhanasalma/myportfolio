import React from 'react';
import propic from '../../Assets/ProfilePic/2.jpg'
import { FaRegHandPointDown, FaRegCheckCircle } from "react-icons/fa";




const About = () => {
   return (
     <div className="flex sm:flex-col lg:flex-row justify-between items-center lg:w-8/12 xl:w-6/12 mx-auto gap-10 ">
       <img
         src={propic}
         className=" rounded-xl w-96 mx-10 h-96 object-cover "
         alt=""
       />

       <div>
         <div className="md:w-96 sm:w-72">
           <p className="text-4xl name">I am Salma Akter</p>
           <p className="my-5 text-lg flex">
             I have been coding nearly 8months. I'm a full stack web developer
             who loves to building full stack application & learning new
             technologies.
           </p>
           <p className="mb-10 ">
             When i am not coding i like to cook and clean and sleep
           </p>
         </div>
         <div>
           <p className="flex gap-5 items-center text-2xl mb-5">
             My favorite weapons are <FaRegHandPointDown className="text-2xl" />
           </p>
           <ul className="mb-10 flex justify-between items-center ">
             <div>
               <li className="flex gap-2 items-center">
                 <FaRegCheckCircle /> NodeJS
               </li>
               <li className="flex gap-2 items-center">
                 <FaRegCheckCircle />
                 ReactJS
               </li>
             </div>
             <div>
               <li className="flex gap-2 items-center">
                 <FaRegCheckCircle />
                 Firebase
               </li>
               <li className="flex gap-2 items-center">
                 <FaRegCheckCircle />
                 MongoDB
               </li>
             </div>
           </ul>
           <div className="text-center">
             <button className="btn git-btn w-40 mb-10">My GitHub</button>
           </div>
         </div>
       </div>
     </div>
   );
};

export default About;