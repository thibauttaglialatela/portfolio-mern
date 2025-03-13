import express from 'express';
import { getAllHobbies } from '../controllers/HobbyController.js';

const hobbyRoute = express.Router();

hobbyRoute.get('/hobbies', getAllHobbies);

export default hobbyRoute;