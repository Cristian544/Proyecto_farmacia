const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: true
    },
    identification_card: {
      type: DataTypes.CHAR(12),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "identification_card",
      autoIncrement: false
    },
    name_last_name: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "name_last_name",
      autoIncrement: false
    },
    phone: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "phone",
      autoIncrement: false
    },
    mail: {
      type: DataTypes.CHAR(20),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "mail",
      autoIncrement: false
    },
    address: {
      type: DataTypes.CHAR(20),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "address",
      autoIncrement: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "age",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "users",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const UsersModel = sequelize.define("users_model", attributes, options);
  UsersModel.associate = function (models) {
    UsersModel.hasMany(models.user_bill_model, {
    foreignKey: 'id_user'
    });
    }
  return UsersModel;
};