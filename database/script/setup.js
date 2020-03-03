const mongoose = require('mongoose');
const user = require('../user/user.model');
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
    db.createCollection('users');
    const result = await user.create({
        type: 'user',
        username: 'teste',
        password: 'teste',
        name: 'teste2',
    });
        console.log(result);
});
