module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : true
        },
        password: {
            type : DataTypes.STRING,
            allowNull : false
        }

    })

    User.associate = (models) => {
        models.User.hasMany(models.Article); // => user.getArticles();
        models.User.belongsToMany(models.Article, {through : "Like", as : 'Likes'}); // => getLikes()
        models.User.hasMany(models.Comment); // => user.getComments();
    }

    return User;
}