const express = require("express");
const cors = require("cors");
const path = require("path");
const calculatorRoutes = require("./routes/calculatorRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "views")));

// Use calculator routes
app.use("/api", calculatorRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
