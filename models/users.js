'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
    }
  };
  User.init({
    firstName: {
      field:"firstName",
      type: DataTypes.STRING,
      allowNull:false
    },
    lastName: {
      field:"lastName",
      type: DataTypes.STRING,
      allowNull:false
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    birthday: {
      type: DataTypes.DATA,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users', 
    underscore:true
  });
  return User;
};