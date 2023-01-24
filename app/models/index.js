const Figurine = require("./Figurine");
const Review = require("./Review");
const User = require("./Users");
const Roles = require("./Roles");

// Figurine - Review

Figurine.hasMany(Review,{
    as: "reviews",
    foreignKey:"figurine_id"
})

Review.belongsTo(Figurine,{
    as: "figurine",
    foreignKey: "figurine_id"
})

// User - Roles

Roles.hasMany(User,{
    as:"users",
    foreignKey: "role_id"
})

User.belongsTo(Roles, {
    as: "roles",
    foreignKey: "role_id"
})

module.exports = { Figurine, Review, Roles, User }