const mongoose = require('mongoose');
const userSchemas = require('./user.schema');

const userModel = mongoose.model('Users', userSchemas);

module.exports = userModel;