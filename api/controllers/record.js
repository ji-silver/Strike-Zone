import Record from "../models/Record.js";

// 캘린더에 이벤트 추가
export const createRecord = async (req, res, next) => {
  try {
    const existingRecord = await Record.findOne({ date: req.body.date });
    if (existingRecord) {
      return res.status(400).json("이미 등록된 이벤트입니다.");
    }
    const createdRecord = await Record.create(req.body);
    res.status(200).json(createdRecord);
  } catch (err) {
    next(err);
  }
};

// 이벤트 수정
export const updateRecord = async (req, res, next) => {
  try {
    const updatedRecord = await Record.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRecord);
  } catch (err) {
    next(err);
  }
};

// 이벤트 삭제하기
export const deleteRecord = async (req, res, next) => {
  try {
    await Record.findOneAndDelete({ date: req.params.date });
    res.status(200).json("삭제되었습니다.");
  } catch (err) {
    next(err);
  }
};

// 모든 이벤트 불러오기
export const getRecords = async (req, res, next) => {
  try {
    const events = await Record.find();
    res.status(200).json(events);
  } catch (err) {
    next(err);
  }
};
