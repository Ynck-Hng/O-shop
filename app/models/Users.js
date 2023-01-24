const Sequelize = require("sequelize");
const sequelize = require("./database/sequelize");

class Users extends Sequelize.Model{}

Users.init({
    firstname:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            isAlphanumeric: true,
        }
    },
    lastname:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            isAlphanumeric: true,
        }
    },
    email: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate:{
            isEmail: true
        }
    },
    password:{
        type: Sequelize.TEXT,
        allowNull: false,
        validate:{
            isAlphanumeric: true
        }
    },
    role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
            isInt: true,
        }
    }
},{
    tableName: "users",
    sequelize
})

module.exports = Users;