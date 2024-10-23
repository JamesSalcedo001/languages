// models/Calculation.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Calculation = sequelize.define("Calculation", {
    firstOperand: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    operator: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    secondOperand: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    result: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

module.exports = Calculation;