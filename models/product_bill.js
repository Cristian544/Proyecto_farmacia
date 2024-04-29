const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    product_registration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "product_registration",
      autoIncrement: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "date",
      autoIncrement: false
    },
    hour: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "hour",
      autoIncrement: false
    },
    id_pro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_pro",
      autoIncrement: false,
      references: {
        key: "idpro",
        model: "product_model"
      }
    },
    id_bill: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_bill",
      autoIncrement: false,
      references: {
        key: "id_bill",
        model: "bill_model"
      }
    }
  };
  const options = {
    tableName: "product_bill",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const ProductBillModel = sequelize.define("product_bill_model", attributes, options);
  ProductBillModel.associate = function (models) {
    ProductBillModel.belongsTo(models.bill_model, {
      foreignKey: 'id_bill'
    });
    ProductBillModel.belongsTo(models.product_model, {
      foreignKey: 'id_pro'
      });
  };
  return ProductBillModel;
};