// server.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const calculatorRoutes = require('./routes/calculatorRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', calculatorRoutes);

// Start the server
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected!');

    // Synchronize models with the database
    await sequelize.sync({ force: false }); // Set force: true to reset tables
    console.log('Database synchronized.');

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
