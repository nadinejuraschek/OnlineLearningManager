const User = require('../models/User');

exports.loggedIn = function(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        req.flash('errors', 'You must be logged in to perform this action.');
        req.session.save(function() {
            res.redirect('/');
        });
    };
};

exports.login = function(req, res) {
    let user = new User(req.body);
    user.login().then(function(result) {
        req.session.user = {
            _id: user.data._id,
            firstname: user.data.firstname,
            email: user.data.email
        };
        req.session.save(function() {
            res.redirect('/');
        });
    }).catch(function(err) {
        req.flash('errors', err);
        req.session.save(function() {
            res.redirect('/');
        });
    });
};

exports.logout = function(req, res) {
    req.session.destroy();
        res.redirect('/login');
};

exports.register = function(req, res) {
    let user = new User(req.body);
    user.register().then(() => {
        req.session.user = {
            _id: user.data._id,
            firstname: user.data.firstname,
            email: user.data.email
        };
        req.session.save(function() {
            res.redirect('/');
        });
    }).catch((regErrors) => {
        regErrors.forEach(function(err) {
            req.flash('regErrors', err);
        });
        req.session.save(function() {
            res.redirect('/');
        });
    });
};

exports.home = function(req, res) {
    if (req.session.user) {
        res.render('home');
    } else {
        res.send('You need to log in.');
    };
};