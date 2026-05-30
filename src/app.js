import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true,limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());

//cors config
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET","POST","PUT","PATCH","DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

//import the routes

import healthCheckRouter from "./routes/healthcheck.routes.js";

import authRouter from "./routes/auth.routes.js"

import projectRouter from "./routes/project.routes.js"

import taskRouter from "./routes/task.routes.js"

import noteRouter from "./routes/note.routes.js"

app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/tasks", taskRouter);
app.use("/api/v1/notes", noteRouter);


app.get("/", (req,res) =>{
    res.send("Welcome To BaseCampy")
});

//global error handler — serializes ApiError (and any thrown error) as JSON
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        statusCode,
        data: null,
        success: false,
        message: err.message || "Internal Server Error",
        errors: err.errors || [],
    });
});

export default app;