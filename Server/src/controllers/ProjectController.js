const mongoose = require('mongoose');
const Project = require('../models/Project.js');

const getAllProjects = async (req, res) => {
    try {
        console.log("🔎 Base active :", mongoose.connection.name);
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        console.error("MongoDB Query Error:", error);
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};

module.exports = { getAllProjects };
