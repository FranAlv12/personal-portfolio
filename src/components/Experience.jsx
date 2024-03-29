import React from "react";
import csharp from "../assets/Csharp_Logo.png";
import java from "../assets/Java.png";
import react from "../assets/react.png";
import js from "../assets/JavaScript-Logo.png";
import py from "../assets/python.png";
import tailwind from "../assets/tailwind.png";
import spring from "../assets/Spring_Boot.svg.png";
import html from "../assets/HTML5_logo_and_wordmark.svg.png";
import css from "../assets/CSS3_logo_and_wordmark.svg.png";
import git from "../assets/githublogo.png"
import sql from "../assets/sqllogo.png"

const Experience = () => {
  const tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: csharp,
      title: "C#",
      style: "shadow-purple-500",
    },
    {
      id: 3,
      src: java,
      title: "Java",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: js,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: py,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: spring,
      title: "SpringBoot",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 10,
      src: sql,
      title: "SQL",
      style: "shadow-orange-500",
    },
    {
      id: 11,
      src: git,
      title: "Github",
      style: "shadow-gray-300",
    },
  ];

  return (
    <div
      name="experience"
      className=" bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">There are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

          {tech.map(({ id, src, title, style }) => (

            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt="" className="w-20 h-20 mx-auto object-contain" />
              <p className="mt-4">{title}</p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
