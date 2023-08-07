import Diary from "../models/Diary.js";
import { createError } from "../utils/error.js";

// 직관 기록 작성
export const createDiary = async (req, res, next) => {
  try {
    const duplicatedDates = await Diary.findOne({
      userId: req.user.id,
      date: req.body.date,
    });

    if (duplicatedDates) {
      return res.status(400).json("같은 날짜에 작성한 기록이 있습니다.");
    }

    const savedDiary = await Diary.create({
      userId: req.user.id,
      ...req.body,
    });

    res.status(200).json(savedDiary);
  } catch (err) {
    next(err);
  }
};

// 직관 기록 수정
export const updateDiary = async (req, res, next) => {
  try {
    const diary = await Diary.findById(req.params.id);
    if (!diary) return next(createError(400, "수정할 기록이 없습니다."));
    if (req.user.if === diary.userId) {
      const updatedDiary = await Diary.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedDiary);
    }
  } catch (err) {}
};

// 직관 기록 삭제
export const deleteDiary = async (req, res, next) => {
  try {
    const diary = await Diary.findById(req.params.id);
    if (req.user.id === diary.userId) {
      await Diary.findByIdAndDelete(req.params.id);
      res.status(200).json("삭제되었습니다.");
    }
  } catch (err) {
    next(err);
  }
};

// 직관 기록 모두 가져오기
export const getDiarys = async (req, res, next) => {
  try {
    const diarys = await Diary.find({ userId: req.user.id });
    res.status(200).json(diarys);
  } catch (err) {
    next(err);
  }
};

// 특정 기록 가져오기
export const getDiary = async (req, res, next) => {
  try {
    const diary = await Diary.findById(req.params.id);
    res.status(200).json(diary);
  } catch (err) {
    next(err);
  }
};
