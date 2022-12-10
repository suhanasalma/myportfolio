import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import profile from '../Assets/ProfilePic/1.jpg'
import './Main.css'


const Main = () => {
  const menus = (
    <>
      <li>
        <Link to='/home'>Home</Link>
      </li>

      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#skills"> Skills</a>
      </li>

      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  flex flex-col ">
        <div className="sticky top-0 py-10  nav-bg flex justify-around navbar">
          <div className="flex-none  lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className=" px-2 mx-2 gap-3">
            <img
              src={profile}
              className="h-12 w-12 object-cover rounded-full"
              alt=""
            />
            <Link className="name text-xl font-bold uppercase">
              Salma <br /> Akter
            </Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu text-lg menu-horizontal">{menus}</ul>
          </div>
        </div>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100">
          {menus}
          <li>
            <p className="">contact: suhanasalma800@gmail.com</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
