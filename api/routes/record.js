import express from "express";
import {
  createRecord,
  updateRecord,
  deleteRecord,
  getRecords,
} from "../controllers/record.js";
import { verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// CREATE
router.post("/", verifyUser, createRecord);

// UPDATE
router.patch("/:id", verifyUser, updateRecord);

// DELETE
router.delete("/:id", verifyUser, deleteRecord);

// GET
router.get("/", verifyUser, getRecords);

export default router;
