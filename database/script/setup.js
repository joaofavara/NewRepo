// const mongoose = require('mongoose');
const user = require('../user/user.model.js');

(async () => {
    try {
    const result = await user.create({
        type: 'user',
        login: 'admin',
        password: 'admin',
        name: 'joao',
    });
        console.log(result);
    } catch (err) {
        console.log(err);
    }
})();