import mongoose from "mongoose";
const { Schema } = mongoose;

const skillSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    logo_url: { type: String, required: true },
    logo_alt: { type: String, required: true },
    category: { type: String, enum: ["Frontend", "Backend", "Project"], required: true },
    level: { type: String, enum: ["Débutant", "Intermédiaire", "Avancé"] },
  },
  { timestamps: true }
);

const Skill = mongoose.model("Skill", skillSchema);

export default Skill;
