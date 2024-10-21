// config/database.js

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("calculator_app_node_javascript", "postgres", "", {
    host: "localhost",
    dialect: "postgres",
});

module.exports = sequelize;
