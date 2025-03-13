import express from 'express';
import { getAllSkills } from '../controllers/SkillController.js';

const skillRoute = express.Router();

skillRoute.get('/', getAllSkills);

export default skillRoute;