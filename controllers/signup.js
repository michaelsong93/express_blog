const models = require('../models');

exports.getSignup = function(req,res,next){
    res.render('pages/signup')
}

exports.signup = async function(req,res,next){
    const {first_name,last_name,email,password,date} = req.body;

    if(!first_name || !last_name || !email || !password || !date){
        return res.redirect('/signup')
    }

    const duplicateUser = await models.User.findOne({
        where : {email : email}
    });

    if(duplicateUser){
      return res.redirect('/signup');
    }

    const createUser = await models.User.create({
        email : email,
        first_name : first_name,
        last_name : last_name,
        password : password,
        birth : date
    })
    res.redirect('/login');
}

