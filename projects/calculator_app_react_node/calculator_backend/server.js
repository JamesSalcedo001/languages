import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';
import calculatorRoutes from './routes/calculatorRoutes.js';

import swaggerUi from 'swagger-ui-express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

let swaggerFile;
try {
  swaggerFile = require('./swagger_output.json');
} catch (error) {
  console.error('Error loading swagger_output.json:', error);
  swaggerFile = {}; // Fallback to an empty object or handle as needed
}

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Swagger UI Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Routes
app.use('/api', calculatorRoutes);

// Start the server
// if (process.env.NODE_ENV !== 'test') {
  (async () => {
    try {
      await sequelize.authenticate();
      console.log('Database connected!');

      // Synchronize models with the database
      await sequelize.sync({ force: false }); // Set force: true to reset tables
      console.log('Database synchronized.');

      app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
        console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
      });
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  })();
// }

export default app;
