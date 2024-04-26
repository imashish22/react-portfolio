import React from "react";
import Sectiontitle from "../../components/Sectiontitle";

const Contact = () => {
  const user = {
    name: "Ashish Jha",
    email: "imjhaashish22@gmail.com",
    age: "20",
    Country: "India",
  };
  return (
    <div>
      <Sectiontitle title="Contact Me " />

      <div className="flex sm:flex-col items-center justify-center">
        <div className="flex flex-col gap-1 ">
          <p className="text-tertiary text-md">{"{"}</p>
          {Object.keys(user).map((key) => (
            <p className="ml-5">
              <span className="text-tertiary text-md">{key} : </span>
              <span className="text-tertiary text-md">{user[key]}</span>
            </p>
          ))}
          <p className="text-white">{"}"}</p>
        </div>
        <div className="h-[400px] l">
          <dotlottie-player
            src="https://lottie.host/2ec9e005-f3ef-4f96-984c-558aa08fc855/k61Q3ccSjS.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
};

export default Contact;
