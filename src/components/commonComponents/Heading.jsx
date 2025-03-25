import React from "react";

const Heading = ({ text }) => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="h-[1px] w-full bg-gradient-to-l from-goldenYellow to-transparent"></div>
      <h1 className="text-goldenYellow text-center text-2xl md:text-3xl lg:text-4xl font-bold mx-4">
        {text}
      </h1>
      <div className="h-[1px] w-full bg-gradient-to-r from-goldenYellow to-transparent"></div>
    </div>
  );
};

export default Heading;
