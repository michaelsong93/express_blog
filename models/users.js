const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : true
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false,
            set(password){
                this.setDataValue('password', bcrypt.hashSync(password,3));
            }
        },

        first_name : {
            type : DataTypes.STRING,
            allowNull : false
        },

        last_name : {
            type : DataTypes.STRING,
            allowNull : false
        },

        birth : {
            type : DataTypes.DATE,
            allowNull : false
        },

    })

    User.associate = (models) => {
        models.User.hasMany(models.Article); // => user.getArticles();
        models.User.belongsToMany(models.Article, {through : "Like", as : 'Likes'}); // => getLikes()
        models.User.hasMany(models.Comment); // => user.getComments();
    }

    return User;
}