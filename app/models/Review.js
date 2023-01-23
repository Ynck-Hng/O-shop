const Sequelize = require("sequelize");
const sequelize = require("./database/sequelize");

class Review extends Sequelize.Model{}

Review.init({
    author:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    note:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    message:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    figurine_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
    }
},{
    tableName:"review",
    sequelize
})