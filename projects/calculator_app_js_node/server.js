const express = require("express");
const cors = require("cors");
const path = require("path");
const calculatorRoutes = require("./routes/calculatorRoutes");
const sequelize = require("./config/database"); // import sequelize instance

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "views")));

// Use calculator routes
app.use("/api", calculatorRoutes);


(async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection to DB has been established!");
  
      await sequelize.sync();
      console.log("Database synchronized.");
  
      app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      });
    } catch (err) {
      console.error("Unable to connect to DB or synchronize database.", err);
    }
  })();
  








