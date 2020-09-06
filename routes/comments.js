const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comments.js');
const authen = require('../middlewares/Authen');

router.get('/:id', authen, commentController.getDetail);
