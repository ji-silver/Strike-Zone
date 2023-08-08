import React, { useState } from "react";
import "./floatingBtn.scss";
import { HiPlus } from "react-icons/hi";

const FloatingBtn = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      <div className="floatingBtn" onClick={toggleMenu}>
        <div>
          <HiPlus className="icon" />
        </div>
      </div>
      {isMenuOpen && children}
    </>
  );
};

export default FloatingBtn;
