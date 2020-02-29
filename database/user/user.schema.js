const mongoose = require('mongoose');

const User = new mongoose.Schema({
    type: String,
    login: String,
    password: String,
    name: String,
}, { collection: 'users' });

module.exports = User;