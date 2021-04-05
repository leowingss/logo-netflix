var express = require('express');
var router = express.Router();
const logo = require("../controller/logo")

/* GET home page. */
router.get('/', logo.netflix);

module.exports = router;
