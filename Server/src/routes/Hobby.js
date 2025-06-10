const express = require('express');
const { getAllHobbies } = require('../controllers/HobbyController.js');

const hobbyRoute = express.Router();

hobbyRoute.get('/hobbies', getAllHobbies);

module.exports = hobbyRoute;
