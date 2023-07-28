import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

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
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("api 페이지 접속 성공");
});

app.listen(8080, () => {
  connect();
  console.log("8080 포트 연결 완료");
});
