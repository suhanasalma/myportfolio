// import Header from "../Pages/Shared/Header/Header";

import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layers/Main");
const { default: Home } = require("../Pages/Home/Home");

export const router = createBrowserRouter([
   {
      path:'/',
      element:<Main/>,
      children:[
         {
            path:'/',
            element:<Home/>
         },
         {
            path:'/home',
            element:<Home/>
         },
         {
            path:'/blogs',
            element:<Blogs/>
         },

      ]
   }
])