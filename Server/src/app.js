import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/dB.js";

dotenv.config();

connectDB();

const app = express();

app.use(express());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("API mise à jour avec Nodemon 🚀");
});

export default app;