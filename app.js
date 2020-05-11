const dotenv = require('dotenv');
dotenv.config();
const   express     = require('express'),
        session     = require('express-session'),
        MongoStore  = require('connect-mongo')(session),
        flash       = require('connect-flash'),
        db          = require('./db'),
        app         = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let sessionOptions = session({
    secret: process.env.APP_SECRET,
    store: new MongoStore({ client: db }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

// ROUTES
const router = require('./routes/index');

app.use(express.static('public'));

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use('/', router);

module.exports = app;