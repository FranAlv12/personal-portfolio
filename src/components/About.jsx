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
        <p className="text-xl mt-20 text-justify">
        My name is Francisco Alvarado, and I was born in the beautiful island of Puerto Rico. However, my formative years were spent in the vibrant surroundings of the Dominican Republic, where I developed a deep appreciation for the rich culture and diverse community. From a young age, I found immense joy in working with computers and discovered a natural talent for building things, which laid the foundation for my passion in technology.        </p>
        <br />
        <p className="text-xl text-justify">
        Fast forward to my professional journey, where I proudly serve in the US Army with a focus on scheduling and dispatching tactical aircraft missions. This experience honed my multitasking skills and instilled in me a strong work ethic. Alongside my military commitment, I also delved into customer service and machining, gaining valuable insights and expertise in these domains. I recently pursued training in web development, embracing the ever-evolving landscape of technology. Now, with a diverse background encompassing military service, customer service, and machining, complemented by my academic achievements, I am actively seeking opportunities in Junior Java Development, IT Support, and Software Development. I am open to new challenges, eager to contribute my skills, and excited to make meaningful connections in the world of technology
        </p>
      </div>
    </div>
  );
};

export default About;
