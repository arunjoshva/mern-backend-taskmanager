import express from "express";
import { createTask, deleteTask, getAllTasks, toggleTaskStatus, updateTask } from "../controllers/taskController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createTask); //CREATE

router.get("/", protect, getAllTasks); //READ

router.put("/:id", protect, updateTask); //UPDATE

router.delete("/:id", protect, deleteTask);

router.patch("/:id/status", protect, toggleTaskStatus);

export default router;