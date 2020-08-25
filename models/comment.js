module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        content : {
            type : DataTypes.STRING,
            allowNull : false
        },
    })

    Comment.associate = (models) => {
        models.Comment.belongsTo(models.User);
        models.Comment.belongsTo(models.Article);
    }

    return Comment;
}