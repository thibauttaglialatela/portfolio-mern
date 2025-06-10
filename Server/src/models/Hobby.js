const mongoose = require("mongoose");
const { Schema } = mongoose;

const hobbySchema = new Schema({
    name: { type: String, required: true, trim: true },
    picture_url: { type: String, required: true },
    picture_alt: { type: String, required: true },
    content: { type: String, required: true },
},
{ timestamps: true}
);

const Hobby = mongoose.model("Hobby", hobbySchema);

module.exports = Hobby;