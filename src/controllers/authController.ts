import bcrypt from "bcryptjs";
import User from "../models/User.js";
import type { Request, Response } from "express";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if(existingUser){
            res.status(400).json({
                message: "User already exists"
            });

            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id.toString()),
            message: "User Registered Successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

export const loginUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if(!user){
            res.status(401).json({
                message: "Invalid Credentials"
            });

            return;
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            res.status(401).json({
                message: "Invalid Credentials"
            });

            return;
        }

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id.toString()),
            message: "User Logged-in Successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}