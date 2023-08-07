import express from "express";
import {
  createDiary,
  updateDiary,
  deleteDiary,
  getDiarys,
  getDiary,
} from "../controllers/diary.js";
import { verifyToken } from "../utils/verifyToken.js";
const router = express.Router();

// CREATE
router.post("/", verifyToken, createDiary);

// UPDATE
router.put("/:id", verifyToken, updateDiary);

// DELETE
router.delete("/:id", verifyToken, deleteDiary);

// GET
router.get("/:id", verifyToken, getDiary);

// GET ALL
router.get("/", verifyToken, getDiarys);

export default router;
