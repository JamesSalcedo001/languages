// server.js

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const calculatorRoutes = require("./routes/calculatorRoutes");

const app = express();