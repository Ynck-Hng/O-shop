const Sequelize = require("sequelize");
const sequelize = require("./database/sequelize");

class Roles extends Sequelize.Model{}

Roles.init({
    name:{
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    tableName: "roles",
    sequelize
})

module.exports = Roles;