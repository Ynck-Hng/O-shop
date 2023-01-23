const Figurine = require("./Figurine");
const Review = require("./Review");

// Figurine - Review

Figurine.hasMany(Review,{
    as: "reviews",
    foreignKey:"figurine_id"
})

Review.belongsTo(Figurine,{
    as: "figurine",
    foreignKey: "figurine_id"
})

module.exports = {Figurine, Review};
