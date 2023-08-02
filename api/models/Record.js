import mongoose from "mongoose";

const RecordSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  players: {
    type: String,
    required: true,
  },
  location: {
    Type: String,
    required: true,
  },
  aTeam: {
    Type: Stirng,
    required: true,
  },
  hTeam: {
    Type: String,
    required: true,
  },
  plcae: {
    Type: String,
    required: true,
  },
  aScore: {
    Type: Number,
    required: true,
  },
  hScore: {
    Type: Number,
    required: true,
  },
  aScore: {
    Type: Number,
    required: true,
  },

  hScore: {
    Type: Number,
    required: true,
  },
  win: {
    Type: String,
  },
  hold: {
    Type: String,
  },
  save: {
    Type: String,
  },
  mvp: {
    Type: String,
  },
  comment: {
    Type: String,
  },
  awayImgUrl: {
    Type: String,
    required: true,
  },
  homeImgUrl: {
    Type: String,
    required: true,
  },
});

export default mongoose.model("Record", RecordSchema);
