const Sequelize = require("sequelize");
const sequelize = require("./database/sequelize");

class Review extends Sequelize.Model{}

Review.init({
    user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
            isInt: true,
        }
    },
    note:{
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
            isInt: true,
        }
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    message:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    figurine_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
            isInt: true
        }
    }
},{
    tableName: "review",
    sequelize
})

module.exports = Review;