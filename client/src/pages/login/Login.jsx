import React from "react";
import "./login.scss";
import FormData from "../../components/formData/FormData";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <FormData>
        <div className="login_bottom">
          <div className="formInput">
            <input type="text" placeholder="이메일" />
            <input type="password" placeholder="비밀번호" />
          </div>
          <div className="btn">
            <button>Login</button>
          </div>
          <div className="desc">
            <span>아직 계정이 없으신가요?</span>
            <NavLink to="/register">
              <button>회원가입</button>
            </NavLink>
          </div>
        </div>
      </FormData>
    </>
  );
};

export default Login;
