// models/Calculation.js

import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';

class Calculation extends Model {}

Calculation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstOperand: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    operator: {
      type: DataTypes.ENUM('+', '-', '*', '/'),
      allowNull: false,
    },
    secondOperand: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    result: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Calculation',
    timestamps: true,
  }
);

export default Calculation;
