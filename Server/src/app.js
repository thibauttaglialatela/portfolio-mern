import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/dB.js";
import projectRoute from "./routes/Project.js"
import skillRoute from "./routes/Skill.js";

dotenv.config();
console.log("🔍 URI MongoDB chargée :", process.env.MONGO_URI);

connectDB();

const app = express();

app.use(express());
app.use(cors());
app.use(morgan("dev"));
app.use('/api/portfolio/projects', projectRoute);
app.use('/api/portfolio/skills', skillRoute);

app.get("/", (req, res) => {
    res.send("API mise à jour avec Nodemon 🚀");
});

export default app;