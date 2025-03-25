import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import { getUserInfo } from "../controllers/UserController.js";

const userRoute = express.Router();

userRoute.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = User.findOne({ email });

        if (!user || !bcrypt.compare(password, user.password)) {
            res.status(400).json({ error: 'identifiant incorrect' });
        }

        res.status(200).json({ message: 'connexion réussie'});
    } catch (error) {
        res.status(500).json({ message: "erreur message", error: error.message});
    }
})

userRoute.get('/user', getUserInfo);

export default userRoute;