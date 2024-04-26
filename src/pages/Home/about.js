import React from "react";
import Sectiontitle from "../../components/Sectiontitle";

const About = () => {
  const skills = ["Javascript", "React", "NodeJs", "MongoDB"];
  return (
    <div>
      <Sectiontitle title="About" />

      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[60vh] w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/4af2e9c5-3626-45c6-8dcb-782f8522f72a/TpF0tFAGUh.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            Hey there! I'm Ashish Anjan Jha, and I'm all about diving deep into
            the world of MERN stack development. From MongoDB to Express.js,
            React, and Node.js, I'm constantly exploring and building with these
            technologies. It all started with a spark of curiosity that turned
            into a full-blown passion for crafting web applications that push
            boundaries.
          </p>
          <p className="text-white">
            Whether I'm brainstorming new project ideas or diving into code, I
            approach each task with creativity and determination. I'm all about
            finding elegant solutions to complex problems and constantly
            challenging myself to learn and grow along the way.
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are the few Technologies i have been Working on!
        </h1>
        <div className="flex flex-wrap gap-10 mt-5 ">
          {skills.map((skill, index) => (
            <div className="border rounded border-tertiary py-3 px-10">
              <h1 className="text-tertiary ">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
