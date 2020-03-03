const express = require('express');
const router = express.Router();

router.post('/',
  function(req, res) {
    res.send('Congratulation!');
  });

module.exports = router;

