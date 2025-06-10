const express = require('express');
const getAllSkills = require('../controllers/SkillController.js');

const skillRoute = express.Router();

skillRoute.get('/', getAllSkills);

module.exports = skillRoute;