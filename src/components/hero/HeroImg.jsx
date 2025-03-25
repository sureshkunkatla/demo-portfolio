import React from "react";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import HackerImg from '../../assets/programmer-avatar.png'

const HeroImg = () => {
  return (
    <div className="relative flex flex-col justify-center items-center md:w-[50%] p-30 rounded-full">
      <img src={HackerImg} alt="programmer"  className="z-10" loading="lazy"/>
      <div className="absolute w-[85%] h-[85%] border-[0.1px] rounded-full  border-white  animate-orbit1 flex justify-center items-center rotate-45">
        <FaReact className="text-cyan-400 absolute -top-4 rotate-315" size={30} />
        <SiJavascript className="text-yellow-400 absolute -bottom-4 rotate-315" size={30} />
      </div>

      <div className="absolute w-[85%] h-[85%] border-[0.1px] rounded-full border-white  animate-orbit2 flex justify-center items-center rotate-225">
        <IoLogoCss3 className="text-blue-400 absolute -left-4 rotate-135" size={30} />
        <IoLogoHtml5 className="text-red-400 absolute -right-4 rotate-135" size={30} />
      </div>
    </div>
  );
};

export default HeroImg;