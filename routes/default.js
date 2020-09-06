const express = require('express');

const router = express.Router();
const indexController = require('../controllers/index.js');
const loginController = require('../controllers/login.js');
const signupController = require('../controllers/signup.js');

/* GET home page. */
router.get('/', indexController.getIndex);

router.get('/login', loginController.getLogin);
router.post('/login', loginController.login);

router.get('/signup', signupController.getSignup);
router.post('/signup', signupController.signup);

router.get('/logout', loginController.logout);

module.exports = router;