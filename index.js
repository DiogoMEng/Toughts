const express = require('express');
const exphbs = require('express-handlebars')
const session = require('express-session');
const fileStore = require('session-file-store')(session);
const flash = require('express-flash');

const app = express();

const conn = require('./db/conn');

// TEMPLATE ENGINE
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'hbs');

// BODY RESPONSE
app.use(express.urlencoded({ extended: true }));

conn.sync().then(() => {
    app.listen(3000, () => {
        console.log('http://localhost:3000')
    })
}).catch(err => console.log(err));