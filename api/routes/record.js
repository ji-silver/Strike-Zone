import express from "express";
import {
  createRecord,
  updateRecord,
  deleteRecord,
  getRecords,
} from "../controllers/record.js";
import { verifyToken } from "../utils/verifyToken.js";
const router = express.Router();

// CREATE
router.post("/", verifyToken, createRecord);

// UPDATE
router.patch("/:id", verifyToken, updateRecord);

// DELETE
router.delete("/:date", verifyToken, deleteRecord);

// GET
router.get("/", verifyToken, getRecords);

export default router;
