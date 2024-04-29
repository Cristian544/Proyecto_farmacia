const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_bill: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_bill",
      autoIncrement: true
    },
    id_pro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_pro",
      autoIncrement: false
    },
    id_pay: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_pay",
      autoIncrement: false,
      references: {
        key: "id_pay",
        model: "payment_method_model"
      }
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
    price_u: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "price_u",
      autoIncrement: false
    },
    price_t: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "price_t",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "bill",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'

  };
  const BillModel = sequelize.define("bill_model", attributes, options);
  BillModel.associate = function (models) {
    BillModel.belongsTo(models.payment_method_model, {
      foreignKey: 'id_pay'
    });
    BillModel.hasMany(models.user_bill_model, {
      foreignKey: 'id_bill'
    });
    BillModel.hasMany(models.product_bill_model, {
      foreignKey: 'id_bill'
    });
  };


  return BillModel;
};