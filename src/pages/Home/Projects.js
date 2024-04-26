import React, { useState } from "react";
import Sectiontitle from '../../components/Sectiontitle'
import { projects } from "../../Resources/projects";


const Projects = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div>
        <Sectiontitle title='Projects'/>

        <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4682] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-10
                ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 "
                    : "text-white"
                }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 sm:flex-col">
            <img src= {projects[selectedItemIndex].images} alt="" className="h-60 w-72" />
        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl ">
            {projects[selectedItemIndex].title}
          </h1>
          {/* <h1 className="text-tertiary text-xl ">
            {experiences[selectedItemIndex].company}
          </h1> */}
          <p className="text-white">{projects[selectedItemIndex].desription}</p>
          <p className="text-white">
            
          </p>
        </div>
        </div>
      </div>
   
    </div>
  )
}

export default Projects