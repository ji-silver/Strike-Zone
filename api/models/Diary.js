import mongoose from "mongoose";

const DiarySchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    myTeam: {
      type: String,
      required: true,
    },
    opposingTeam: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: [String],
      default: ["/images/stadium1.jpg"],
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Diary", DiarySchema);
