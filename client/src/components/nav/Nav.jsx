import React, { useEffect, useState } from "react";
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

const Nav = ({ modalOpen }) => {
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
  const [toggle, setToggle] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const handleToggle = () => {
    setToggle((prevShowMobileNav) => !prevShowMobileNav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 50) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = async () => {
    const isLogout = window.confirm("로그아웃 하시겠습니까?");
    if (isLogout) {
      try {
        await axios.post(`${PROXY}/api/auth/logout`);
        dispatch(logout());
        window.location.reload();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <NavContainer modalOpen={modalOpen} isAtTop={isAtTop}>
      <Header className="header container" isAtTop={isAtTop}>
        <a href="/">
          <img src="/images/logo.png" alt="" className="logo" />
        </a>
        <div className="nav">
          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "#e02b66" : "#424242",
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
                  color: isActive ? "#e02b66" : "#424242",
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
                  color: isActive ? "#e02b66" : "#424242",
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
      </Header>
      {toggle && <NavMobile handleToggle={handleToggle} />}
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  top: ${(props) => (props.isAtTop ? "20px" : "0")};
  z-index: ${(props) => (props.modalOpen ? "0" : "20")};

  @media (max-width: 960px) {
    height: 60px;
  }
`;

const Header = styled.header`
  width: ${(props) => (props.isAtTop ? "80%" : "100%")};
  border-radius: ${(props) => (props.isAtTop ? "50px" : "0")};
  border: ${(props) => (props.isAtTop ? "1px solid #e8e8e8;" : "none")};
  transition: all 0.3s;
`;
