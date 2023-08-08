import React, { useState } from "react";
import "./floatingBtn.scss";
import { CiMenuKebab } from "react-icons/ci";
import { HiPlus } from "react-icons/hi";

const FloatingBtn = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMenuOpen && children}
      <div className="floatingBtn" onClick={toggleMenu}>
        <div>
          <HiPlus className="icon" />
        </div>
      </div>
    </>
  );
};

export default FloatingBtn;
