import React from "react";
import profile from "../../Assets/ProfilePic/1.jpg";
import { HiOutlineHandRaised } from "react-icons/hi2";
import "./home.css";
import Typewriter from "typewriter-effect";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <section className="">
      <div className="h-screen">
        <div className="h-3/6  flex  justify-center items-center gap-5">
          <img
            src={profile}
            className="w-60 h-60 object-cover rounded-full  blog-img"
            alt=""
          />
          <h1 className="lg:text-4xl w-96 font-extrabold sm:text-3xl">
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
        <p className="sm:w-5/6 text-center md:w-4/6 lg:w-2/6 mx-auto text-xl ">
          I love to build amazing websites and always try to implement in a way
          so its user friendly. Right now focusing on empowring myself to create
          something fun and cool so it never a boring websites
        </p>
        <div className=" text-center mt-5">
          <a target="blank" href="https://drive.google.com/file/d/14DYJI0a-t4eL3MJGWHQ7FTjAAy8JOCsT/view?usp=sharing">
            <button className="btn cv-btn text-lg">My Cv</button>
          </a>
        </div>
      </div>

      <div id="about" className="">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </section>
  ); 
};

export default Home;
