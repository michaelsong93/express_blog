const LocalStrategy = require('passport-local').Strategy;
const models = require('../models');
const bcrypt = require('bcrypt');

//암호화
const validatePassword = (user, password) => (bcrypt.compareSync(password, user.password))

module.exports = function(passport) {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async(id, done) =>  {
    const user = await models.User.findByPk(id);
    done(null, user);
  });

  passport.use('local', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  }, async (req, email, password, done) => {
    try {
      const user = await models.User.findOne({where : {email: email}});
      if (user && validatePassword(user, password)) {
        return done(null, user);
      }
      else{
        return done(null, false, req.flash('danger', 'Invalid email or password'));
      }
    } catch(err) {
      console.error(err);
      done(err);
    }
  }));
};