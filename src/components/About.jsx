import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Passionate and strong in programming and aiming to work as a Full-Stack Developer.
        Will go the extra mile to make sure everything is done right. Friendly and easy to communicate. 
        Fast learner and ready to expand my domain.

        </p>
      </div>
    </div>
  );
};

export default About;
