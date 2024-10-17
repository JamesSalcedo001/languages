const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// middleware to parse JSON
app.use(express.json());

// allow CORS for front end to communicate with back end
app.use(cors());
