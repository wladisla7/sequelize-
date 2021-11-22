'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      User.hasMany(models.Order, { foreignKey: "user_id" });
    }
  };
  User.init({
    firstName: {
      field: "firstName",
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    lastName: {
      field: "lastName",
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isAfter(value) {
          if (value => new Date()) {
            throw new Error('18+')
          }
        },
        notEmpty: true,
        isDate: true
      }
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    underscore: true
  });
  return User;
};