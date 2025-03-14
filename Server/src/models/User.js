import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    biography: { type: String, required: true },
    avatar_url: { type: String, required: true },
    avatar_alt: { type: String, required: true },
    social_links: {
        linkedin: { type: String, required: true },
        github: { type: String, required: true }
    }
});

const User = mongoose.model("User", userSchema);

export default User;