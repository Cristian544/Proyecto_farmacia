const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    sales_record: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "sales_record",
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
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_user",
      autoIncrement: false,
      references: {
        key: "id",
        model: "users_model"
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
    tableName: "user_bill",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const UserBillModel = sequelize.define("user_bill_model", attributes, options);
  UserBillModel.associate = function (models) {
    UserBillModel.belongsTo(models.bill_model, {
      foreignKey: 'id_bill'
    });
    UserBillModel.hasMany(models.users_model, {
      foreignKey: 'id'
    });
  };
  return UserBillModel;
};