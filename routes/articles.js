const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articles.js');

router.use('/articles', articleController);

module.exports = router;
