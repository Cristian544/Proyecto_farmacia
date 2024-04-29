const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    idpro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "idpro",
      autoIncrement: true
    },
    name_pro: {
      type: DataTypes.CHAR(20),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name_pro",
      autoIncrement: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "price",
      autoIncrement: false
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "amount",
      autoIncrement: false
    },
    id_cat: {
      type: DataTypes.CHAR(20),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_cat",
      autoIncrement: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "stock",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "product",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const ProductModel = sequelize.define("product_model", attributes, options);
  ProductModel.associate = function (models) {
    ProductModel.hasMany(models.product_bill_model, {
      foreignKey: 'id_pro'
    });
    ProductModel.belongsTo(models.category_model, {
      foreignKey: 'id_cat'
    });
  }
  return ProductModel;
};