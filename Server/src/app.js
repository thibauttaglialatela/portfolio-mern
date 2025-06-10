const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");

const connectDB = require("./config/dB.js");
const projectRoute = require("./routes/Project.js");
const skillRoute = require("./routes/Skill.js");
const hobbyRoute = require("./routes/Hobby.js");
const userRoute = require("./routes/User.js");

dotenv.config();
console.log("🔍 URI MongoDB chargée :", process.env.MONGO_URI);

connectDB();


const app = express();

const rootDir = path.resolve(__dirname, ".."); 

app.use("/images", express.static(path.join(rootDir, "assets/images")));
app.use("/icons", express.static(path.join(rootDir, "assets/icons")))

app.use(express());
app.use(cors());
app.use(morgan("dev"));

//routes API
app.use('/api/portfolio/projects', projectRoute);
app.use('/api/portfolio/skills', skillRoute);
app.use('/api/portfolio/', hobbyRoute);
app.use('/api/portfolio/', userRoute);


app.get("/", (req, res) => {
    res.send("API mise à jour avec Nodemon 🚀");
});

module.exports = app;