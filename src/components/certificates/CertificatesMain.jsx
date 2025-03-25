import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";

import AWSCloudCertificate from "../../assets/aws-colud-practitioner.jpg";
import JSCertificate from "../../assets/javascript-certificate.jpg";
import ReactCertificate from "../../assets/React-certificate.png";
import Heading from "../commonComponents/Heading";

const imagesArr = [
  {
    image: AWSCloudCertificate,
    link: "https://www.udemy.com/certificate/UC-2ac29d86-2272-42b5-a899-71c448f48270/",
  },
  {
    image: JSCertificate,
    link: "https://cutshort.io/certificate/107520",
  },
  {
    image: ReactCertificate,
    link: "https://certificates.ccbp.in/intensive/react-js?id=ABTAXDPWCX",
  },
];

const CertificatesMain = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onClickNext = () => {
    setCurrentIndex((prev) => {
      if (prev + 1 > imagesArr.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const onClickPrev = () => {
    setCurrentIndex((prev) => {
      if (prev - 1 < 0) {
        return imagesArr.length - 1;
      } else {
        return prev - 1;
      }
    });
  };

  const getCardClass = (idx) => {
    const position = (idx - currentIndex + imagesArr.length) % imagesArr.length;
    switch (position) {
      case 0:
        return "active";
      case 1:
        return "next";
      case imagesArr.length - 1:
        return "prev";
      default:
        return "hidden";
    }
  };

  return (
    <div className="mt-10">
    <Heading text={"Certificates"}/>
    <div className="max-w-[1200px] h-auto flex flex-col justify-center items-center lg:mx-auto">
      <div className="max-w-[1200px] h-[350px] md:h-[450px] mt-10">
        {imagesArr.map((show, idx) => (
          <a href={show.link} target="_blank">
            <div
              key={idx}
              className={`carousel-card ${getCardClass(idx)}`}
              style={{
                backgroundImage: `url(${show.image}`,
                left: "50%",
              }}
            ></div>
          </a>
        ))}
      </div>

      <div className="flex mt-10 lg:flex-row lg:justify-center lg:items-center">
        <IoArrowBack
          className=" text-3xl text-gray-700 hover:text-blue-500 transition-all duration-300 cursor-pointer"
          onClick={() => onClickPrev()}
        />
        <div className="flex flex-row justify-center items-center">
          {imagesArr.map((_, index) => {
            return (
              <div
                className={`h-[8px] w-[8px] mx-4 ${
                  index === currentIndex ? "bg-white" : "bg-cyan"
                } rounded-full`}
                onClick={() => setCurrentIndex(index)}
              ></div>
            );
          })}
        </div>
        <IoArrowForward
          className="text-3xl text-gray-700 hover:text-blue-500 transition-all duration-300 cursor-pointer"
          onClick={() => onClickNext()}
        />
      </div>
    </div>
    </div>
  );
};

export default CertificatesMain;
