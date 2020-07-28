const Course = require('../models/Course');

// READ ALL
exports.getAllCourses = function (req, res) {
    Course.find().then(function (data) {
    res.json(data);
  });
};

// READ ONE
exports.getCourse = function (req, res) {
    Course.findById(req.params.id).then(function (data) {
    res.json(data);
  });
};

// CREATE
exports.addCourse = async function (req, res, next) {
  try {
    console.log(req.body);
    let course = await Course.create(req.body);
    return res.status(200).json({
      course,
    });
  } catch (err) {
    return next({
      status: 400,
      message: err.message,
    });
  }
};

// EDIT
exports.editCourse = function (req, res) {
  Course.findByIdAndUpdate(req.params.id, req.body).then(function (data) {
    res.json(data);
  });
};

// DELETE
exports.deleteCourse = function (req, res) {
  Course.findByIdAndRemove(req.params.id).then(function (data) {
    res.json(data);
  });
};
