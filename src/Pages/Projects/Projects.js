import React from 'react';
import CleanSpace from './MyProject/CleanSpace';
import Fernichiaa from './MyProject/Fernichiaa';

const Projects = () => {
   return (
     <div className='w-10/12 mx-auto mb-32'>
       <h2 className="text-center font-bold text-4xl skill mb-10">
         My Coding Projects
       </h2>
       <div>
         <Fernichiaa/>
         <CleanSpace/>
       </div>
     </div>
   );
};

export default Projects;