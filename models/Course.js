const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, "Please enter a name for the course." ],
        unique: [ true, "Course has already been added."],
        trim: true,
    },
    instructor: {
        type: String,
        trim: true,
    },
    platform: {
        type: String,
        required: [ true, "Please add a platform." ],
        trim: true,
    },
    keywords: {
        type: Array,
    },
    progress: {
        type: Number,
        required: [ true, "Please add your progress."],
    },
    certificate: {
        type: Boolean,
    },
    link: {
        type: String,
        required: [ true, "Please add a course link." ],
        trim: true,
    },
});

module.exports = mongoose.model("Course", courseSchema);