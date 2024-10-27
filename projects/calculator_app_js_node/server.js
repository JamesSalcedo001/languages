// server.js

const express = require("express");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const calculatorRoutes = require("./routes/calculatorRoutes");
const sequelize = require("./config/database");

const app = express();
const PORT = 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Apply rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP
});

app.use(limiter);

// Serve static files
app.use(express.static(path.join(__dirname, "views")));

// Use calculator routes
app.use("/api", calculatorRoutes);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to DB has been established!");

    await sequelize.sync({ force: true });
    console.log("Database synchronized.");

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Unable to connect to DB or synchronize database.", err);
  }
})();
