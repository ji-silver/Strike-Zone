import mongoose from "mongoose";

const RecordSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  players: {
    type: [String],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  aTeam: {
    type: String,
    required: true,
  },
  hTeam: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  aScore: {
    type: [Number],
    required: true,
  },
  hScore: {
    type: [Number],
    required: true,
  },
  aSum: {
    type: [Number],
    required: true,
  },
  hSum: {
    type: [Number],
    required: true,
  },
  win: {
    type: String,
  },
  hold: {
    type: [String],
  },
  saveP: {
    type: String,
  },
  mvp: {
    type: String,
  },
  comment: {
    type: String,
  },
  awayImgUrl: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Record", RecordSchema);
