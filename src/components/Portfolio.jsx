import React from "react";
import todolist from "../assets/task-list.png";
import quiz from "../assets/quiz.png";
import colorgame from '../assets/color-game.png';


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      link: "https://github.com/korada-Jayanth/Todolist",
      demo: "https://htkbvr.csb.app/",
      src: todolist,
    },
    {
      id: 2,
      link: "https://github.com/korada-Jayanth/Quiz",
      demo: "https://korada-jayanth.github.io/Quiz/",
      src: quiz,
    },
    {
      id: 3,
      link: "https://github.com/korada-Jayanth/ColorGame",
      demo: "https://korada-jayanth.github.io/ColorGame/",
      src: colorgame,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo} target={"__blank"}><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button></a>
                <a href={link} target={"__blank"}><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
