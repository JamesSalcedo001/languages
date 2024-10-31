// server.js

import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';
import calculatorRoutes from './routes/calculatorRoutes.js';

import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger_output.json" asser { type: "json" };

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', calculatorRoutes);

// export app for testing
export default app;

// Start the server
if (process.env.NODE_ENV !== "test") {
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
}
