import React, { useState } from "react";
import Sectiontitle from "../../components/Sectiontitle";
import { experiences } from "../../Resources/experiences";

const Experiences = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <div>
      <Sectiontitle title="Education" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4682] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.map((experience, index) => (
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
                {experience.period}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl ">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-xl ">
            {experiences[selectedItemIndex].company}
          </h1>
          <p className="text-white">
            {experiences[selectedItemIndex].desription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
