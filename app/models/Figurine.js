const Sequelize = require("sequelize");
const sequelize = require("./database/sequelize");

class Figurine extends Sequelize.Model{}

Figurine.init({
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: false,
    },
    size:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    price:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    category:{
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    tableName: "figurine",
    sequelize,
})

module.exports = Figurine;