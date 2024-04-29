const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_pay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_pay",
      autoIncrement: true
    },
    name_method: {
      type: DataTypes.CHAR(30),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name_method",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "payment_method",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const PaymentMethodModel = sequelize.define("payment_method_model", attributes, options);
  PaymentMethodModel.associate = function (models) {
    PaymentMethodModel.hasMany(models.bill_model, {
    foreignKey: 'id_pay'
    });
    }
  return PaymentMethodModel;
};