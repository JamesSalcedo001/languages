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

// start the server

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected!");

        // synchronize models with database
        await sequelize.sync({ force: false }) // set to true to reset tables
        console.log("Database syncronized!")
    }
})