'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, { foreignKey: "user_id" });
    }
  };
  Order.init({
    productName: {
      field: "productName",
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    custumerId: {
      field: 'custumerId',
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    quantity: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    isSent: {
      field: 'isSent',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    sentDate: {
      field: "sentDate",
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    userId: {
      field: "user_id",
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "User", key: "id" },
    },
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    underscore: true
  });
  return Order;
};