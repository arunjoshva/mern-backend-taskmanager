import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        let token: string | undefined;

        const authHeader = req.headers.authorization;

        if(authHeader && authHeader.startsWith("Bearer ")){
            token = authHeader.split(" ")[1];
        }

        if(!token){
            res.status(401).json({
                message: "Authentication Failed"
            });

            return;
        }

        const decoded = jwt.verify(token, 
            process.env.JWT_SECRET as string
        ) as { userId: string };

        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            res.status(401).json({
                message: "User Not Found"
            });

            return;
        }

        req.user = user;

        next();
    } catch (error) {
        res.status(401).json({
            message: "Authentication Failed"
        });
    }
}