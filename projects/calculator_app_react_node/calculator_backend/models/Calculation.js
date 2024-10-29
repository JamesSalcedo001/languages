// models/Calculation.js

import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";


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
    },
    secondOperand: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    result: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
    timestamps: true,
});

export default Calculation;