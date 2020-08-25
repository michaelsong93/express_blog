var express = require('express');
var router = express.Router();
const defaultRouter = require('./default');
/* GET home page. */
router.use('/', defaultRouter);



module.exports = router;
