const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');


/** Instantiate server */
const app = express();
const PORT = process.env.PORT || 3000;

/** Database Connection */
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/busca', { useNewUrlParser: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Database connected successfully!')
});

/** Middleware */
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(bodyParser.json());

/** Require controllers */
require('./controllers/cards')(app);

/**Exports */
module.exports = app;

/** Port listener */
app.listen(3000, () => {
    console.log('App Listening on Port => 3000')

});

