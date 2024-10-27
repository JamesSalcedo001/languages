const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Calculation = sequelize.define("Calculation", {
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
        type: DataTypes.ENUM("+", "-", "*", "/"),
        allowNull: false,
    }

})