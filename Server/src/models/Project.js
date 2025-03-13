import mongoose from "mongoose";
const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    name: { type: String, required: true },
    content: { type: String, required: true },
    image_url: { type: String, required: true },
    image_alt: { type: String, required: true },
    github_link: { type: String, required: true },
    live_demo_link: String,
    tech_stack: { type: [String], required: true },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
