const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const config = require('./config');
const routerLogin = require('./login/index');
const middlewarePassport = config.passport.authenticate('local');
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:8080',
}));

const configMongo = {
    "auth": { "authSource": "admin" },
    "user": "root",
    "pass": "example",
    "useNewUrlParser": true,
    "useUnifiedTopology": true,
}
mongoose.connect('mongodb://root:example@localhost/dev', configMongo);
const db = mongoose.connection;

db.on('error', () => {
    console.error.bind(console, 'mongodb connection error');
});

db.once('open', async () => {
    console.log('mongodb connected');
});

app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(config.passport.initialize());
app.use(config.passport.session());

app.use('/login', middlewarePassport, routerLogin);

app.listen(3000);
