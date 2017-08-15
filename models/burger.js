module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 30]
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultStatus: false
    // },
    // date: {
    //   type: DataTypes.NOW,
    //   allowNull: false
    }
  });
  
  return Burger;
};