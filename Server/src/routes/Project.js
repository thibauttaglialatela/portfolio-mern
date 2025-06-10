const express = require("express");
const getAllProjects = require("../controllers/ProjectController.js")
const projectRoute = express.Router();


//Get all projects
projectRoute.get('/', getAllProjects);

module.exports = { projectRoute };