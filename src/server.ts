import dotenv from "dotenv";
import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";


dotenv.config();

const app = express();

// Connect Database
connectDB();

//middleware
app.use(cors({
    origin: ["http://localhost:5173", "https://mern-taskmanager-frontend.netlify.app"],
    credentials: true
})); //Third party middleware
app.use(express.json()); //built-in middleware
app.use("/api/auth", authRoutes); // mounting the router in main express application
app.use("/api/test", testRoutes); // mounting the router in main express application
app.use("/api/tasks", taskRoutes); // mounting the router in main express application

app.get("/", (req: Request, res: Response) => {
    res.json(
        {   
            sample_endpoints:{
                register: "/api/auth/register",
                login: "/api/auth/login"
            },
            message: "For other endpoints, view on github"}
    );
});

const PORT = process.env.PORT || 3000;

console.log("File changed");

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});