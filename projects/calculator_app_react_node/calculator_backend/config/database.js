// config/database.js


import "dotenv/config";
import dotenvFlow from 'dotenv-flow';
dotenvFlow.config();

import { Sequelize } from "sequelize";

const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: false,
    },
    test: {
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: false,
    },
};

const currentConfig = config[env];

const sequelize = new Sequelize(
    currentConfig.database,
    currentConfig.username,
    currentConfig.password,
    {
        host: currentConfig.host,
        dialect: currentConfig.dialect,
        logging: currentConfig.logging,
    }

);

export default sequelize;