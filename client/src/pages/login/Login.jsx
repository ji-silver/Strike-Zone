import React, { useEffect, useState } from "react";
import "./login.scss";
import FormData from "../../components/formData/FormData";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";

const Login = () => {
  const [errors, setErrors] = useState("");
  const [userValue, setUserValue] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!userValue.email) {
      setErrors((prev) => ({ ...prev, email: "이메일을 입력해주세요." }));
    }
    if (!userValue.password) {
      setErrors((prev) => ({ ...prev, password: "비밀번호를 입력해주세요." }));
    }

    if (!userValue.email || !userValue.password) {
      return;
    }

    try {
      const res = await axios.post("/auth/login", userValue);
      dispatch(login(res.data));
      alert("로그인 되었습니다.");
      navigate("/");
    } catch (err) {
      setErrors({ password: "이메일 혹은 비밀번호가 일치하지 않습니다." });
    }
  };

  return (
    <>
      <FormData>
        <div className="login_bottom">
          <div className="formInput">
            <input
              type="text"
              placeholder="이메일"
              name="email"
              onChange={handleChange}
            />
            {errors.email && <span className="errMessage">{errors.email}</span>}
            <input
              type="password"
              placeholder="비밀번호"
              name="password"
              onChange={handleChange}
            />
            {errors && <span className="errMessage">{errors.password}</span>}
          </div>
          <div className="btn">
            <button onClick={handleClick}>Login</button>
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
