import React from "react";

const HeroText = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("#projects");
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 100, 
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center lg:items-start lg:w-[50%]">
      <h1 className="text-white text-4xl font-bold text-center md:text-left mt-4">
        Hi, I'm Suresh Kunkatla
      </h1>
      <h2 className="text-goldenYellow text-2xl font-bold text-center md:text-left mt-0">
        Frontend Developer
      </h2>

      <p className="text-slateGray text-md text-center lg:text-left mt-4">
        I craft visually immersive & interactive web experiences that captivate
        users. Passionate about React and modern UI frameworks.
      </p>
      <div className="flex flex-row justify-center items-center mt-2">
        <button
          onClick={scrollToProjects}
          className="bg-goldenYellow p-2 rounded-md text-midnightBlue font-semibold"
        >
          My Work
        </button>
        <a href="https://drive.google.com/file/d/1P5wB08ayTI3oT8wr5uHVZOHv4XmkC-j8/view?usp=drive_link" target="_blank"><div className="bg-goldenYellow p-2 rounded-md text-midnightBlue font-semibold ml-2">
          Resume
        </div></a>
      </div>
    </div>
  );
};

export default HeroText;
