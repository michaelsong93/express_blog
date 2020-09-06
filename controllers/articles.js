const models = require('../models');

// exports.getArticles = function(req,res,next){
//     res.render('pages/articles')
// }

// CRUD
// GET /articles — > List
// GET /articles/new —> create article
// POST /articles
// GET /articles/:id —> detail 아티클 1개
// GET /articles/:id/edit
// PUT /articles/:id —> update
// DELETE /article/:id

// 목록페이지
exports.getArticles =async function(req,res,next){
    const articles =await models.Article.findAll({
        include : models.User
    });
    
    console.log(articles[0].User.name);
    
    res.render('pages/articles/index', {articles: articles});
}

//2.새로 만드는 페이지
exports.getCreate = function(req,res,next){
    res.render('pages/articles/new')
}

//실제로 2. 에서 아티클 만드는 기능
exports.createArticle = async function(req,res,next){
    const user = req.user;
    const {title,desc} = req.body;

    await user.createArticle({
        title : title,
        content : desc
    })

    // await models.Article.create({
    //     title : title,
    //     content : desc,
    //     UserId : user.id
    // })
    res.redirect('/articles');
}

//3. detail 페이지
exports.getDetail = function(req,res,next){
    res.render('pages/articles/details');
}