import React, { useState } from "react";
import "./navMobile.scss";
import { IoClose } from "react-icons/io5";
import { styled } from "styled-components";

const NavMobile = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <MobileNav className="mNav" toggle={toggle}>
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
    </MobileNav>
  );
};

export default NavMobile;

const MobileNav = styled.nav`
  right: ${(props) => (props.toggle ? "-100%" : "0")};
  transition: right 0.3s ease;
`;
