import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLogo from "./NavLogo";
import NavBarLinks from "./NavBarLinks";

const NavBarMain = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="bg-midnightBlue w-full fixed p-5 flex flex-row justify-between items-center z-100">
      <NavLogo />
      <NavBarLinks isOpen={openMenu} menuToggle={() => toggleMenu()}/>
      <div className="flex lg:hidden md:block">
        <button
          className="p-3 text-white items-center justify-center rounded-full border-[0.5px] border-goldenYellow"
          onClick={() => toggleMenu()}
          
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  );
};

export default NavBarMain;
