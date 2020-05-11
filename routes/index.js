const   express             = require('express'),
        router              = express.Router(),
        userController      = require('../controllers/user'),
        courseController    = require('../controllers/course'),
        platformController  = require('../controllers/platform');

router.get('/', userController.home);

router.get('/login', function (req, res) {
    res.render('login');
});

router.get('/register', function (req, res) {
    res.render('register');
});

router.post("/register", userController.register);

router.post("/login", userController.login);

router.post("/logout", userController.logout);

router.get("*", function (req, res) {
    res.render('404');
})

module.exports = router;