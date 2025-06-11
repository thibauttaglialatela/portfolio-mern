const Skill = require('../models/Skill.js');

const getAllSkills = async (req, res) => {
    try {
        const skills = await Skill.find();
        res.status(200).json(skills);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message});
    }
};

module.exports = { getAllSkills };