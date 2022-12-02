import React from 'react';
import propic from '../../Assets/ProfilePic/2.jpg'

const About = () => {
   return (
     <div className="flex sm:flex-col lg:flex-row justify-between items-center lg:w-8/12 xl:w-6/12 mx-auto mt-32 gap-10">

         <img src={propic} className="rounded-xl w-96 h-96 object-cover" alt="" />

       <div>
         <div className="md:w-96 sm:w-72">
           <p className="text-4xl name">I am Salma Akter</p>
           <p className="my-5 text-lg">
             I have been coding nearly 8months. I'm a full stack web developer
             who loves to building full stack application & learning new
             technologies.
           </p>
           <p className="mb-10">
             When i am not coding i like to cook and clean and sleep
           </p>
         </div>
         <div>
           <p>My favorite weapons are </p>
           <ul className="flex justify-between items-center ">
             <div>
               <li>NodeJS</li>
               <li>ReactJS</li>
             </div>
             <div>
               <li>Firebase</li>
               <li>MongoDB</li>
             </div>
           </ul>
           <button>My GitHub</button>
         </div>
       </div>
     </div>
   );
};

export default About;