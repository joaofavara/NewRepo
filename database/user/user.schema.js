const mongoose = require('mongoose');

const User = new mongoose.Schema({
    type: String,
    username: String,
    password: String,
    name: String,
});

module.exports = User;