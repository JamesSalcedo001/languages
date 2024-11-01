// server.js

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

console.log('Server.js is running');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Swagger UI Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Routes
app.use('/api', calculatorRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Catch unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Start the server
if (process.env.NODE_ENV !== 'test') {
  console.log('Starting server with NODE_ENV:', process.env.NODE_ENV); 
  (async () => {
    try {
      console.log('Authenticating database connection...'); 
      await sequelize.authenticate();
      console.log('Database connected!');

      console.log('Synchronizing models...');
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
}

export default app;
