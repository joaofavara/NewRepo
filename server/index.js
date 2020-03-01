const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../database/user/user.model');
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:8080',
}));

const config = {
    "auth": { "authSource": "admin" },
    "user": "root",
    "pass": "example",
    "useNewUrlParser": true,
    "useUnifiedTopology": true,
}
mongoose.connect('mongodb://root:example@localhost/dev', config);
const db = mongoose.connection;
db.on('error', () => {
    console.error.bind(console, 'mongodb connection error');
});

db.once('open', async () => { 
    console.log('mongodb connected');
});

passport.serializeUser(function(user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
    User.findById(id, function (err, user) {
        if (err) { return cb(err); }
        cb(null, user);
    });
});

passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!(user.password === password)) { return done(null, false); }
            return done(null, user);
        });
    }
));

app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.post('/login', passport.authenticate('local', { successRedirect: '/success', failureRedirect: '/error' }));

app.use('/error',(req, res) => {
    res.status(201).send("Login and/or Password are wrong");
});

app.use('/success',(req, res) => {
    res.status(200).send("home");
});

app.listen(3000);
