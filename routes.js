const   express         = require('express'),
        router          = express.Router(),
        userController  = require('./controllers/user'),
        courseController = require('./controllers/course'),
        platformController = require('./controllers/platform');

router.get('/', userController.home);

router.get('/login', function (req, res) {
    res.render('login');
});

router.post("/register", userController.register);

router.post("/login", userController.login);

router.post("/logout", userController.logout);

module.exports = router;