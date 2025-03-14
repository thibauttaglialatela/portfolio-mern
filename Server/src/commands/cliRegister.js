import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import readLineSync from "readline-sync";
import User from "../models/User.js";
import connectDB from "../config/dB.js";

dotenv.config();


const registerUser = async () => {
    console.log("\n📝 Création d'un nouvel utilisateur\n");

    const email = readLineSync.questionEMail('Votre email : ');
    const password = readLineSync.questionNewPassword('Votre mot de passe : ', {hideEchoBack: true, min: 8, max: 24});
    const biography = readLineSync.question('Votre biographie : ');
    const avatarUrl = readLineSync.question('Votre image de profil : ');
    const avatarAlt = readLineSync.question('Texte alternatif à l\'avatar : ');
    const linkedinLink = readLineSync.question('URL profil Linkedin : ');
    const githubLink = readLineSync.question('URL profile Github: ');

    //hashage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    //enregistrement de l'utilisateur en base
    const newUser = new User({
        email: email,
        password: hashedPassword,
        biography: biography,
        avatar_url: avatarUrl,
        avatar_alt: avatarAlt,
        social_links: {linkedin: linkedinLink, github: githubLink}
    });

    try {
        await newUser.save();
        console.log('Nouvel utilisateur créé');
    } catch (error) {
        console.error('Erreur lors de l\' enregistrement', error.message);
    }

}

(async () => {
    await connectDB();
    await registerUser();
})();