const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_cat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_cat",
      autoIncrement: true
    },
    name_category: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name_category",
      autoIncrement: false
    },
  };
  const options = {
    tableName: "category",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const CategoryModel = sequelize.define("category_model", attributes, options);
  CategoryModel.associate = function (models) {
    CategoryModel.hasMany(models.product_model, {
      foreignKey: 'id_cat'
    });
  }
  return CategoryModel;
};