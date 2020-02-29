const mongoose = require('mongoose');
const userSchemas = require('./user.schema');

const userModel = mongoose.model('users', userSchemas);

module.exports = userModel;