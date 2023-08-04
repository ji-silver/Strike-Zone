import jwt, { decode } from "jsonwebtoken";
import { createError } from "./error";

// 토큰 검증
export const verifyToken = (req, res, next) => {
  // 쿠키에서 토큰 값 가져오기
  const token = req.cookies.token;
  if (!token) {
    return next(createError(401, "토큰이 없습니다."));
  }

  // 검증 성공 시 decoded된 유저 정보 접근 가능
  jwt.verify(token, Process.env.SECRET_KEY, (err, decoded) => {
    if (err) return next(createError(403, "유효하지 않은 토큰입니다."));
    req.user = decoded;
    next();
  });
};

// 회원 인증
export const verifyUser = (req, res, next) => {
  // 위에 작성한 토큰 검증 실행. 사용자 id랑 매개변수 id랑 같은지 확인
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id) {
      next();
    } else {
      if (err) return next(createError(403, "접근 권한이 없습니다."));
    }
  });
};
