import React, { useEffect } from "react";

const links = [
  {
    link: "Home",
    section: "home",
  },
  {
    link: "About",
    section: "about",
  },
  {
    link: "Skills",
    section: "skills",
  },
  {
    link: "Projects",
    section: "projects",
  },
  {
    link: "Certificates",
    section: "certificates",
  },
  {
    link: "Contact",
    section: "contact",
  },
];

const NavBarLinks = ({ isOpen, menuToggle }) => {
  useEffect(() => {
    const handleSmoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(`#${targetId}`);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100, 
          behavior: "smooth",
        });
      }
    };

    const navLinks = document.querySelectorAll("li a");
    navLinks.forEach((link) =>
      link.addEventListener("click", handleSmoothScroll)
    );

    return () => {
      navLinks.forEach((link) =>
        link.removeEventListener("click", handleSmoothScroll)
      );
    };
  }, []);

  return (
    <ul
      className={`z-10 absolute lg:static top-[80px] left-0 w-full lg:w-auto bg-midnightBlue lg:bg-transparent flex flex-col lg:flex-row lg:gap-6 text-center transition-all duration-500 ${
        isOpen ? "block" : "hidden lg:flex"
      }`}
    >
      {links.map((each) => {
        return (
          <li className="group p-2" key={each.section} onClick={ menuToggle}>
            <a
              href={`#${each.section}`}
              className="text-white text-md group-hover:text-goldenYellow transition-all duration-500"
            >
              {each.link}
            </a>
            <div className="mx-auto bg-goldenYellow w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavBarLinks;
