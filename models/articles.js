module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define('Article', {
        content : {
            type : DataTypes.STRING,
            allowNull : false
        },
        title : {
            type : DataTypes.STRING,
            allowNull : false
        },
    })

    Article.associate = (models) => {
        models.Article.belongsTo(models.User);
        models.Article.belongsToMany(models.User, {through : "Like"});
    }

    return Article;
}