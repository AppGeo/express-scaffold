'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send({
    users: [
      { id: 1, name: 'Jane Doe' },
      { id: 2, name: 'John Smith' }
    ]
  });
});

module.exports = router;