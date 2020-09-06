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
exports.getDetail = async function(req,res,next){
    const id = req.params.id;
    try{
        const article = await models.Article.findByPk(id, {
            include : [{
                model : models.Comment,
                include : models.User
            }, {
                model : models.User
            }]
        });
        if(!article) throw new Error('article not found');
        // const article = await models.Article.findOne({
        //     where : {},
        //     include : models.Comment
        // })
        // const comments = await models.Comment.findAll({where : {ArticleId : id}});
        // const comments = await article.getComments();
        res.render('pages/articles/details', {article});
    } catch(err){
        next(err);
    }
}

//database 에 넣는 작업
exports.postComment = async function(req,res,next){
    const user = req.user;
    const id = req.params.id; // article 의 아이디
    const {content} = req.body;

    await models.Comment.create({
        content, 
        ArticleId : id, 
        UserId : user.id
    });
    res.redirect(`/articles/${id}`);

}

exports.getEdit = async function(req,res,next){
    const article = await models.Article.findByPk(req.params.id);
    res.render('pages/articles/edit', {article})
}

exports.update = async function(req,res,next){

}