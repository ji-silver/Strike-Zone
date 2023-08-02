import React from "react";
import FormData from "../../components/formData/FormData";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <FormData>
        <div className="login_bottom">
          <div className="formInput">
            <input type="text" placeholder="이름" />
            <input type="text" placeholder="이메일" />
            <input type="password" placeholder="비밀번호" />
          </div>
          <div className="btn">
            <button>Sign Up</button>
          </div>
          <div className="desc">
            <span>이미 계정이 있으신가요?</span>
            <NavLink to="/login">
              <button>로그인</button>
            </NavLink>
          </div>
        </div>
      </FormData>
    </div>
  );
};

export default Register;
