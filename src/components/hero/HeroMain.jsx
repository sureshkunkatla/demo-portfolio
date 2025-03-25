import React from "react";
import HeroImg from "./HeroImg";
import HeroText from "./HeroText";

const HeroMain = () => {
  return (
    <div className="flex flex-col h-[100vh]  max-w-[1200px] mx-auto justify-evenly lg:flex-row lg:justify-between items-center relative px-4 pt-20">
      <HeroText />
      <HeroImg />
    </div>
  );
};

export default HeroMain;
