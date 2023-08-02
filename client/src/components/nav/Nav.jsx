import React, { useState } from "react";
import styled from "styled-components";
import "./nav.scss";
import NavMobile from "../navMobile/NavMobile";
import { BsCalendarCheck, BsPencilSquare } from "react-icons/bs";
import { PiBaseballCapFill } from "react-icons/pi";
import { HiOutlineMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevShowMobileNav) => !prevShowMobileNav);
  };

  return (
    <>
      <header className="header container">
        <a href="/">Strike Zone</a>
        <div className="nav">
          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "#e02b66" : "inherit",
                })}
              >
                <BsCalendarCheck />
                캘린더
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/write"
                style={({ isActive }) => ({
                  color: isActive ? "#e02b66" : "inherit",
                })}
              >
                <BsPencilSquare />
                직관기록
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/odd"
                style={({ isActive }) => ({
                  color: isActive ? "#e02b66" : "inherit",
                })}
              >
                <PiBaseballCapFill /> 직관 승률
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="list">
          <div className="btn">
            <button>
              <NavLink to="/login">로그인</NavLink>
            </button>
            <button>
              <NavLink to="/register">회원가입</NavLink>
            </button>
          </div>
          <div className="menu" onClick={handleToggle}>
            <HiOutlineMenu />
          </div>
        </div>
      </header>
      {toggle && <NavMobile handleToggle={handleToggle} />}
    </>
  );
};

export default Nav;
