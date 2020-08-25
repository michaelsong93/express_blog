const models = require('../models');

exports.getLogin = function(req, res, next){
    res.render('pages/login');
};

exports.login = async function(req, res, next){
    const email = req.body.email;
    const password = req.body.password;

    const users = await models.User.findAll();
    console.log(users);
    // res.redirect('/index');
}

exports.createAccount = function(req,res,next){
    res.redirect('/signup');
}