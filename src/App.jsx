import React, { useState, useEffect } from "react";
import "./App.css";
import ABoutMain from "./components/about/ABoutMain.jsx";
import CertificatesMain from "./components/certificates/CertificatesMain.jsx";
import HeroMain from "./components/hero/HeroMain.jsx";
import NavBarMain from "./components/navBar/NavBarMain.jsx";
import ProjectMain from "./components/projects/ProjectMain.jsx";
import SkillsMain from "./components/skills/SkillsMain.jsx";
import ContactMain from "./components/contact/ContactMain.jsx";

function App() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = Array.from({ length: 100 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
    }));
    setStars(newStars);
  }, []);

  return (
    <>
      <NavBarMain />
      <div className=" space-background relative overflow-hidden">
        {stars.map((star, idx) => (
          <div
            key={idx}
            className="star absolute bg-white rounded-full -z-100"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          ></div>
        ))}

        <section id="#home">
          <HeroMain />
        </section>
        <section id="#about">
          <ABoutMain />
        </section>
        <section id="#skills">
          <SkillsMain />
        </section>
        <section id="#projects">
          <ProjectMain />
        </section>
        <section id="#certificates">
          <CertificatesMain />
        </section>
        <section id="#contact">
          <ContactMain />
        </section>
      </div>
    </>
  );
}

export default App;
