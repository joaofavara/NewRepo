const express = require('express');
const routerLogin = require('./login/index');
const app = express();
const mongoose = require('mongoose');

const config = {
    "auth": { "authSource": "admin" },
    "user": "root",
    "pass": "example",
    "useNewUrlParser": true,
    "useUnifiedTopology": true,
}
mongoose.connect('mongodb://localhost/dev', config);

app.use('/login', routerLogin);

// app.use('/api', routerLogin);

app.listen(3000, () => {
    console.log('Is working');
});
