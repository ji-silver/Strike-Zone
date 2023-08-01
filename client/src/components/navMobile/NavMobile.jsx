import React, { useState } from "react";
import "./navMobile.scss";
import { IoClose } from "react-icons/io5";

const NavMobile = ({ handleToggle }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <nav className="mNav" toggle={toggle}>
      <div className="menu" onClick={handleToggle}>
        <IoClose />
      </div>
      <ul>
        <li>
          <a href="#">캘린더</a>
        </li>
        <li>
          <a href="#">직관 기록</a>
        </li>
        <li>
          <a href="#">직관 승률</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
