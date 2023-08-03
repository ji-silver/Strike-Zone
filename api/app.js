import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("정상적으로 MongoDB 서버에 연결되었습니다.");
  } catch (error) {
    console.error("MongoDB가 연결되어 있지 않습니다!\n" + error);
  }
};

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("api 페이지 접속 성공");
});

// 에러처리 미들웨어 (err, req, res, next가 반드시 필요!)
app.use((err, req, res, next) => {
  // 서버 전역에서 에러 발생 시 err객체의 status, message를 추출하고 응답코드 500과 message를 나타내기
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "서버 오류";
  // 클라이언트에 전달 (stack은 디버깅 하기 위한 스택 추적 정보)
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.use("/api/auth", authRouter);

app.listen(8080, () => {
  connect();
  console.log("8080 포트 연결 완료");
});
