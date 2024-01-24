import React from "react";

import vpets from "../assets/PETS.jpeg";
import blackjack from "../assets/blackjack.jpeg";
import airforceedu from "../assets/AirforceEdu.jpeg";
import script from "../assets/SCRIPT.jpeg";
import quizapp from "../assets/QuizApp.jpeg"
import chatbot from "../assets/ChatBot.jpeg"
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: vpets,
    },
    {
      id: 2,
      src: airforceedu,
    },
    {
      id: 3,
      src: script,
    },
    {
      id: 4,
      src: blackjack,
    },
    {
        id:5,
        src: quizapp,
    },
    {
        id:6,
        src:chatbot,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-start w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">


          {
            portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center ">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
