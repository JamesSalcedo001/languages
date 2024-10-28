// server.js

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const calculatorRoutes = require("./routes/calculatorRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());


// routes
app.use("/api", calculatorRoutes);

