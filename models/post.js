module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
   
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true,
     
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Table1"
    }
  });
  return Post;
};
