const express = require("express");
const cors = require("cors");
const path = require("path");
const calculatorRoutes = require("./routes/calculatorRoutes");

const app = express();
const PORT = 3000;


// middleware to parse JSON
app.use(express.json());

// allow CORS for front end to communicate with back end
app.use(cors());


// serve static files (HTML/CSS/JS)
app.use(express.static(path.join(__dirname, "views")));

// use the calculator routes
app.use("/api", calculatorRoutes);


// start the server
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})