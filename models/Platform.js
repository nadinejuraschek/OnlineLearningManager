const mongoose = require("mongoose");

const platformSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, "Please enter a name for the platform." ],
        unique: [ true, "Platform already exists."],
        trim: true,
    },
    link: {
        type: String,
        required: [ true, "Please add a platform link." ],
        trim: true,
    },
});

module.exports = mongoose.model("Platform", platformSchema);