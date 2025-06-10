const Hobby = require('../models/Hobby.js');

const getAllHobbies = async (req, res) => {
    try {
        const hobbies = await Hobby.find();
        res.status(200).json(hobbies);
    } catch (error) {
        res.status(500).json({ message: "erreur serveur", error: error.message });
    }
};

module.exports = { getAllHobbies };
