var logger = require('morgan');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const passport = require('passport');
const passportConfig = require('./passport');
const session = require("express-session");
const flash = require("connect-flash");

module.exports = (app) => {
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname,'..','public')));
    app.use(session({
        secret : "#@@!@#",
        resave : false,
        saveUninitialized: true
    }))
    app.use(flash());
    passportConfig(passport);
    app.use(function(req,res,next){
        res.locals.flashMessages = req.flash();
        next();
    })
};