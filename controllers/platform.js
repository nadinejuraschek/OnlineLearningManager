const Platform = require('../models/Platform');

// READ ALL
exports.getAllPlatforms = function (req, res) {
  Platform.find().then(function (data) {
    res.json(data);
  });
};

// READ ONE
exports.getPlatform = function (req, res) {
    Platform.findById(req.params.id).then(function (data) {
    res.json(data);
  });
};

// CREATE
exports.addPlatform = async function (req, res, next) {
  try {
    console.log(req.body);
    let platform = await Platform.create(req.body);
    return res.status(200).json({
      platform,
    });
  } catch (err) {
    return next({
      status: 400,
      message: err.message,
    });
  }
};

// EDIT
exports.editPlatform = function (req, res) {
  Platform.findByIdAndUpdate(req.params.id, req.body).then(function (data) {
    res.json(data);
  });
};

// DELETE
exports.deletePlatform = function (req, res) {
  Platform.findByIdAndRemove(req.params.id).then(function (data) {
    res.json(data);
  });
};
