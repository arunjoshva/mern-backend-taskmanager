import type { Request, Response } from "express"
import Task from "../models/Task.js";

//CREATE TASK
export const createTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, description } = req.body;

        const task = await Task.create({
            title,
            description,
            userId: req.user!._id
        });

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

//GET ALL TASKS
export const getAllTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const tasks = await Task.find({
            userId: req.user!._id
        }).sort({createdAt: -1});

        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

//Update Task
export const updateTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const task = await Task.findOne({
            _id: req.params.id,
            userId: req.user!._id
        });

        if(!task){
            res.status(404).json({
                message: "Task Not Found"
            });

            return;
        }

        task.title = req.body.title ?? task.title;

        task.description = req.body.description ?? task.description;

        await task.save();

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

//Delete Task
export const deleteTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const task = await Task.findOne({
            _id: req.params.id,
            userId: req.user!._id
        });

        if(!task){
            res.status(404).json({
                message: "Task Not Found"
            });

            return;
        }

        await task.deleteOne();

        res.status(200).json({
            message: "Task Deleted"
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

//Toggle Status
export const toggleTaskStatus = async (req: Request, res: Response): Promise<void> => {
    try {
        const task = await Task.findOne({
            _id: req.params.id,
            userId: req.user!._id 
        });

        if(!task){
            res.status(404).json({
                message: "Task Not Found"
            });

            return;            
        }

        task.status = task.status === "pending" ? "completed" : "pending";

        await task.save();

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}