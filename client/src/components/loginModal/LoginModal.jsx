import React from "react";
import { NavLink } from "react-router-dom";
import "./loginModal.scss";
import { styled } from "styled-components";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Container>
      <div className="loginModal">
        <div className="text">
          <p>로그인이 필요한 서비스입니다.</p>
          <p>로그인 하시겠습니까?</p>
        </div>
        <div className="btn">
          <NavLink to="/login">
            <button>확인</button>
          </NavLink>
          <button onClick={onClose}>취소</button>
        </div>
      </div>
    </Container>
  );
};

export default LoginModal;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.211);
  margin: 0 auto;
`;
