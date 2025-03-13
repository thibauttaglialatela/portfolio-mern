import express from "express";
import { getAllProjects } from "../controllers/ProjectController.js";

const projectRoute = express.Router();


//Get all projects
projectRoute.get('/', getAllProjects);

export default projectRoute;