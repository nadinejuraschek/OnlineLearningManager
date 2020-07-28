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

/* PLATFORMS */
router.get('/api/platforms', platformController.getAllPlatforms);

router.get('/api/platforms/:id', platformController.getPlatform);

router.get('/api/platforms/new', platformController.addPlatform);

router.get('/api/platforms/:id/edit', platformController.editPlatform);

router.get('/api/platforms/:id/delete', platformController.deletePlatform);

/* COURSES */
router.get('/api/courses', courseController.getAllCourses);

router.get('/api/courses/:id', courseController.getCourse);

router.get('/api/courses/new', courseController.addCourse);

router.get('/api/courses/:id/edit', courseController.editCourse);

router.get('/api/courses/:id/delete', courseController.deleteCourse);

router.get("*", function (req, res) {
    res.render('404');
})

module.exports = router;