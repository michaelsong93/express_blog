var express = require('express');
var router = express.Router();
const defaultRouter = require('./default');
const articlesRouter = require('./articles');
/* GET home page. */
router.use('/', defaultRouter);
router.use('/articles', articlesRouter);


module.exports = router;
