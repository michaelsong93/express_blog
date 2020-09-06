const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articles.js');
const authen = require('../middlewares/Authen');


router.get('/', authen, articleController.getArticles);

router.get('/new', authen, articleController.getCreate);
router.post('/', authen, articleController.createArticle);

router.get('/:id', authen, articleController.getDetail);
router.post('/:id/comments', authen, articleController.postComment);

router.get('/:id/edit', authen, articleController.getEdit);
router.put('/:id', authen, articleController.update);
module.exports = router;
