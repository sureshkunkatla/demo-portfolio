import React from "react";
import AboutText from "./AboutText";
import AboutImg from "./AboutImg";
import Heading from "../commonComponents/Heading";

const ABoutMain = () => {
  return (
    <div className="max-w-[1200px]  mx-auto">
      <Heading text={"About"}/>
      {/* <h1 className="text-4xl text-goldenYellow font-bold text-center">
        About Me
      </h1> */}
      <div className="flex flex-col h-auto lg:flex-row max-w-[1200px] mx-auto justify-between items-center relative px-4">
        <AboutImg />
        <AboutText />
      </div>
    </div>
  );
};

export default ABoutMain;
