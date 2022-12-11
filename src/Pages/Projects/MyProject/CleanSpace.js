import React from 'react';
import { VscGithub } from "react-icons/vsc";
import img from "../../../Assets/project/2.jpg";


const CleanSpace = () => {
   return (
     <div className="flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center gap-10 lg:mt-52 md:mt-32">
       <div className="flex  items-center justify-center w-full h-96 xl:w-1/2">
         <img
           className="block object-cover w-full h-full max-w-2xl rounded-md"
           src={img}
           alt="Clean Space"
         />
       </div>
       <div className="w-full xl:w-1/2">
         <div className="xl:max-w-xl ">
           <h1 className="md:text-3xl sm:text-2xl font-semibold tracking-wide text-gray-800 dark:text-white xl:text-2xl">
             Clean Space
           </h1>
           <p className="mt-4 text-gray-600 dark:text-gray-300">
             This is a personal working website moreover it is based on a person
             who works in cleaning service but it can be modified for any kind
             of service. users can add review,see reviews and owner can add
             service,delete service and edit them
           </p>
           <div className="flex items-center gap-5">
             <a href="https://github.com/suhanasalma/Clean_Space_Client">
               <button className="flex my-10 gap-2 items-center justify-center btn btn-outline sm:h-fit">
                 <VscGithub /> Github Repo Client
               </button>
             </a>
             <a href="https://github.com/suhanasalma/Clean_Space_Server">
               <button className="flex my-10 gap-2 items-center justify-center btn btn-outline sm:h-fit">
                 <VscGithub /> Github Repo Server
               </button>
             </a>
           </div>
           <p className="name mt-10 text-xl font-bold">It is built with:</p>
           <div className="grid gap-6 mt-8 sm:grid-cols-2">
             <div className="flex items-center text-gray-800 -px-3 ">
               <svg
                 className="w-5 h-5 mx-3"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   stroke-width="2"
                   d="M5 13l4 4L19 7"
                 />
               </svg>

               <span className="mx-3">Tailwind CSS</span>
             </div>

             <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
               <svg
                 className="w-5 h-5 mx-3"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   stroke-width="2"
                   d="M5 13l4 4L19 7"
                 />
               </svg>

               <span className="mx-3">React</span>
             </div>

             <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
               <svg
                 className="w-5 h-5 mx-3"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   stroke-width="2"
                   d="M5 13l4 4L19 7"
                 />
               </svg>

               <span className="mx-3">Firebase</span>
             </div>

             <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
               <svg
                 className="w-5 h-5 mx-3"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   stroke-width="2"
                   d="M5 13l4 4L19 7"
                 />
               </svg>

               <span className="mx-3">Node JS</span>
             </div>

             <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
               <svg
                 className="w-5 h-5 mx-3"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   stroke-width="2"
                   d="M5 13l4 4L19 7"
                 />
               </svg>

               <span className="mx-3">Express JS</span>
             </div>

             <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
               <svg
                 className="w-5 h-5 mx-3"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   stroke-width="2"
                   d="M5 13l4 4L19 7"
                 />
               </svg>

               <span className="mx-3">Mongodb</span>
             </div>
           </div>
         </div>
         <div className="flex items-center justify-center my-10">
           <a href="https://cleaning-company-f8678.web.app/">
             <button className="btn-outline btn ">View Demo</button>
           </a>
         </div>
       </div>

       {/* <div className="flex  items-center justify-center w-full h-96 xl:w-1/2">
         <img
           className="block object-cover w-full h-full max-w-2xl rounded-md"
         //   src={img}
           alt="fernichia"
         />
       </div> */}
     </div>
   );
};

export default CleanSpace;