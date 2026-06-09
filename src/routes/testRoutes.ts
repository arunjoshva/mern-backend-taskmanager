import express from "express"
import { protect } from "../middleware/authMiddleware.js";
import type { Request, Response } from "express";

const router = express.Router();

router.get("/profile", protect, (req: Request, res: Response) => {
    res.json({
        message: "Protected Route Accessed",
        user: req.user
    });
});

export default router;