import React, { useState } from "react";
import styled from "styled-components";
import "./nav.scss";
import NavMobile from "../navMobile/NavMobile";
import { BsCalendarCheck, BsPencilSquare } from "react-icons/bs";
import { PiBaseballCapFill } from "react-icons/pi";
import { HiOutlineMenu } from "react-icons/hi";
import { CSSTransition } from "react-transition-group";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevShowMobileNav) => !prevShowMobileNav);
  };

  return (
    <>
      <header className="header container">
        <a href="#">Strike Zone</a>
        <div className="nav">
          <ul>
            <li>
              <a href="#">
                <BsCalendarCheck />
                캘린더
              </a>
            </li>
            <li>
              <a href="#">
                <BsPencilSquare />
                직관기록
              </a>
            </li>
            <li>
              <a href="#">
                <PiBaseballCapFill /> 직관 승률
              </a>
            </li>
          </ul>
        </div>
        <div className="list">
          <div className="btn">
            <button>로그인</button>
            <button>회원가입</button>
          </div>
          <div className="menu" onClick={handleToggle}>
            <HiOutlineMenu />
          </div>
        </div>
      </header>
      {toggle && <NavMobile />}{" "}
    </>
  );
};

export default Nav;
