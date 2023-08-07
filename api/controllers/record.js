import Record from "../models/Record.js";
import { createError } from "../utils/error.js";

// 캘린더에 이벤트 추가 (userId 추가하기)
export const createRecord = async (req, res, next) => {
  try {
    // 현재 로그인된 사용자와 같은 날짜에 등록된 이벤트가 있는지 확인
    const existingRecord = await Record.findOne({
      userId: req.user.id,
      date: req.body.date,
    });

    // 현재 로그인된 사용자와 같은 날짜에 이미 등록된 이벤트가 있는 경우
    if (existingRecord) {
      return res.status(400).json("이미 등록된 이벤트입니다.");
    }

    // 같은 날짜에 등록된 이벤트가 없는 경우, 새로운 이벤트 등록
    const savedRecord = await Record.create({
      userId: req.user.id,
      ...req.body,
    });

    res.status(200).json(savedRecord);
  } catch (err) {
    next(err);
  }
};

// 이벤트 수정
export const updateRecord = async (req, res, next) => {
  try {
    const record = await Record.findById(req.params.id);
    if (!record) return next(createError(400, "수정할 기록이 없습니다."));
    if (req.user.id === record.userId) {
      const updatedRecord = await Record.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedRecord);
    }
  } catch (err) {
    next(err);
  }
};

// 이벤트 삭제하기
export const deleteRecord = async (req, res, next) => {
  try {
    const recordToDelete = await Record.findOne({
      date: req.params.date,
      userId: req.user.id,
    });
    if (!recordToDelete) {
      return res
        .status(404)
        .json({ error: "해당 날짜에 대한 기록을 찾을 수 없습니다." });
    }
    await Record.findOneAndDelete({
      date: req.params.date,
      userId: req.user.id,
    });
    res.status(200).json("삭제되었습니다.");
  } catch (err) {
    next(err);
  }
};

// 이벤트 가져오기
export const getRecords = async (req, res, next) => {
  try {
    const record = await Record.find({ userId: req.user.id });
    res.status(200).json(record);
  } catch (err) {
    next(err);
  }
};
