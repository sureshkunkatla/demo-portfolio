import React from 'react'
import ProfileImg from '../../assets/profile-img.jpg'

const AboutImg = () => {
  return (
      <div className="relative flex flex-col justify-center items-center md:w-[50%] p-10 lg:p-30">
        <img src={ProfileImg} alt="programmer"  className="z-10 rounded-full" loading="lazy"/>
      </div>
    );
}

export default AboutImg