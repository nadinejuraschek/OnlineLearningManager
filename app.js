const dotenv = require('dotenv');
dotenv.config();
const   express     = require('express'),
        // db          = require('./db'),
        app         = express();

const   router      = require('./routes/index');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('public'));

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use('*', router);

app.listen(process.env.PORT, function() {
    console.log(`Server has started on ${process.env.PORT}.`);
});

module.exports = app;