import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

// 회원가입
export const register = async (req, res, next) => {
  try {
    // 비밀번호 해싱
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    // 해시된 비밀번호 적용
    const newUser = await User.create({
      ...req.body,
      password: hash,
    });

    res.status(200).send("회원가입 완료되었습니다.");
  } catch (err) {
    next(err);
  }
};

// 로그인
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return next(
        createError(404, "이메일 또는 비밀번호가 일치하지 않습니다.")
      );

    // 해시된 비밀번호를 비교
    const userPassword = await bcrypt.compare(req.body.password, user.password);
    if (!userPassword)
      return createError(400, "이메일 또는 비밀번호가 일치하지 않습니다.");

    const token = jwt.sign(
      {
        email: user.email,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );

    res.cookie("token", token, { httpOnly: true }).status(200).json({ token });
  } catch (err) {
    next(err);
  }
};
