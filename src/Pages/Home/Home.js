import React from "react";
import profile from "../../Assets/ProfilePic/1.jpg";
import { HiOutlineHandRaised } from "react-icons/hi2";
import "./home.css";
import Typewriter from "typewriter-effect";
import About from "../About/About";

const Home = () => {
  return (
      <section className="h-full w-full">
        <div className="flex sm:h-4/6 md:h-5/6 justify-center items-center gap-5  sm:mb-10 md:mb-0">
          <img
            src={profile}
            className="w-60 h-60 object-cover rounded-full  blog-img"
            alt=""
          />
          <h1 className="text-4xl  lg:font-extrabold ">
            <HiOutlineHandRaised className="text-5xl text-black" /> Hello I am a
            <Typewriter
              options={{
                strings: [
                  "full-stack web developer",
                  "front-end web developer",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
          </h1>
        </div>
        <p className="sm:w-5/6 text-center md:w-4/6 lg:w-2/6 mx-auto -mt-40 text-xl">
          I love to build amazing websites and always try to implement in a way
          so its user friendly. Right now focusing on empowring myself to create
          something fun and cool so it never a boring websites
        </p>
        <div className=" text-center sm:my-20 md:mt-10">
          <button className="btn cv-btn text-lg">Download Cv</button>
        </div>
        <div id="about" className="">
          <About />
        </div>
        <div className="my-52">hello</div>
      </section>
  ); 
};

export default Home;
