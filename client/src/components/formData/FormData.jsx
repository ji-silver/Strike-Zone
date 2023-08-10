import React from "react";
import { styled } from "styled-components";
import "./formData.scss";
import { NavLink, useLocation } from "react-router-dom";

const FormData = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const message = isLoginPage
    ? "로그인 후 이용해주세요."
    : "회원가입 후 이용해주세요.";

  return (
    <div className="loginC">
      <div className="section">
        <div className="leftContainer">
          <div className="loginWrap">
            <div className="login_top">
              <NavLink to="/">
                <p className="Logo">
                  <img src="/images/logo.png" alt="" />
                </p>
              </NavLink>
              <p>{message}</p>
              <div className="google">
                <button>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/google.svg`}
                    alt=""
                  />
                  구글 로그인
                </button>
              </div>
            </div>
            <div className="line-container">
              <div className="line">
                <span>or</span>
              </div>
            </div>
            {children}
          </div>
        </div>
        <div className="RightContainer">
          <BgImg></BgImg>
        </div>
      </div>
    </div>
  );
};

export default FormData;

const BgImg = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/images/stadium1.jpg);
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
