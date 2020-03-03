const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../database/user/user.model');

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

module.exports = {
    passport
};
