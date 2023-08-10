import React from "react";
import "./navMobile.scss";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { BsCalendarCheck, BsPencilSquare } from "react-icons/bs";
import { PiBaseballCapFill } from "react-icons/pi";

const NavMobile = ({ handleToggle }) => {
  return (
    <nav className="mNav">
      <div className="menu" onClick={handleToggle}>
        <IoClose />
      </div>
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
            to="/diary"
            style={({ isActive }) => ({
              color: isActive ? "#e02b66" : "inherit",
            })}
          >
            <BsPencilSquare />
            직관 기록
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/odd"
            style={({ isActive }) => ({
              color: isActive ? "#e02b66" : "inherit",
            })}
          >
            <PiBaseballCapFill />
            직관 승률
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
