import React, { useState } from "react";
import "./nav.scss";
import NavMobile from "../navMobile/NavMobile";
import { BsCalendarCheck, BsPencilSquare } from "react-icons/bs";
import { PiBaseballCapFill } from "react-icons/pi";
import { HiOutlineMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import axios from "axios";
import { styled } from "styled-components";
import { deleteDiary } from "../../redux/diarySlice";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const handleToggle = () => {
    setToggle((prevShowMobileNav) => !prevShowMobileNav);
  };

  const handleClick = async () => {
    const isLogout = window.confirm("로그아웃 하시겠습니까?");
    if (isLogout) {
      try {
        await axios.post("/auth/logout");
        dispatch(logout());
        window.location.reload();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <NavContainer>
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
                to="/diary"
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
            {currentUser ? (
              <button onClick={handleClick}>로그아웃</button>
            ) : (
              <>
                <NavLink to="/login">
                  <button>로그인</button>
                </NavLink>
                <NavLink to="/register">
                  <button>회원가입</button>
                </NavLink>
              </>
            )}
          </div>
          <div className="menu" onClick={handleToggle}>
            <HiOutlineMenu />
          </div>
        </div>
      </header>
      {toggle && <NavMobile handleToggle={handleToggle} />}
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 70px;
`;
