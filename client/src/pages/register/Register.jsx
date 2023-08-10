import React, { useState } from "react";
import FormData from "../../components/formData/FormData";
import { NavLink, useNavigate } from "react-router-dom";
import { isValidEmail, isValidatePassword } from "../../utils/userValidation";
import axios from "axios";
import "./register.scss";
import { TeamSelect } from "../../datatable";

const Register = () => {
  const [errors, setErrors] = useState("");
  const [newUser, setNewUser] = useState({
    nickname: "",
    email: "",
    password: "",
    myTeam: "",
  });

  const navigate = useNavigate();

  const handlehTeamChange = (e) => {
    setNewUser((prev) => ({ ...prev, myTeam: e.target.value }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!newUser.nickname) {
      validationErrors.nickname = "닉네임을 입력해주세요.";
    }

    if (!newUser.myTeam) {
      validationErrors.myTeam = "팀을 선택해주세요.";
    }

    if (!newUser.email) {
      validationErrors.email = "이메일을 입력해주세요.";
    } else if (!isValidEmail(newUser.email)) {
      validationErrors.email = "올바른 이메일 형식이 아닙니다.";
    }

    if (!newUser.password) {
      validationErrors.password = "비밀번호를 입력해주세요.";
    } else if (!isValidatePassword(newUser.password)) {
      validationErrors.password =
        "비밀번호는 8자리의 문자, 숫자를 포함하여 입력해주세요.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      await axios.post("/auth/register", newUser);
      alert("회원가입 되었습니다.");
      navigate("/login");
    } catch (err) {
      setErrors({ email: "이미 가입되어 있는 이메일입니다." });
    }
  };

  return (
    <div className="registerForm">
      <FormData>
        <div className="login_bottom">
          <div className="formInput">
            <input
              type="text"
              placeholder="닉네임"
              name="nickname"
              onChange={handleChange}
            />
            {errors.nickname && (
              <span className="errMessage">{errors.nickname}</span>
            )}
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
            {errors.password && (
              <span className="errMessage">{errors.password}</span>
            )}
            <TeamSelect onChange={handlehTeamChange} />
            {errors.myTeam && (
              <span className="errMessage">{errors.myTeam}</span>
            )}
          </div>

          <div className="btn">
            <button onClick={handleClick}>Sign Up</button>
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
