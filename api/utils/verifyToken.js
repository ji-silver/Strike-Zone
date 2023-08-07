import jwt from "jsonwebtoken";
import { createError } from "./error.js";

// 토큰 검증
export const verifyToken = (req, res, next) => {
  // 쿠키에서 토큰 값 가져오기
  const token = req.cookies.token;
  if (!token) {
    return next(createError(401, "토큰이 없습니다."));
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return next(createError(403, "유효하지 않은 토큰입니다."));
    req.user = user;
    next();
  });
};
