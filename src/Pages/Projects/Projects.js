import React from 'react';
import CleanSpace from './MyProject/CleanSpace';
import Fernichiaa from './MyProject/Fernichiaa';
import WebHistory from './MyProject/WebHistory';

const Projects = () => {
   return (
     <div className="w-10/12 mx-auto">
       <h2 className="text-center font-bold md:text-4xl sm:text-2xl skill lg:mb-32 sm:mb-0">
         My Coding Projects
       </h2>
       <div>
         <Fernichiaa />
         <hr className="bg-black h-[2px] mt-14" />
         <CleanSpace />
         <hr className="bg-black h-[2px] mt-14" />
         <WebHistory />
       </div>
     </div>
   );
};

export default Projects;