const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articles.js');
const authen = require('../middlewares/Authen');


router.get('/articles', authen, articleController.getArticles);

router.get('/articles/new', authen, articleController.getCreate);
router.post('/articles', authen, articleController.createArticle);

router.get('/articles/details', authen, articleController.getDetail);

module.exports = router;
