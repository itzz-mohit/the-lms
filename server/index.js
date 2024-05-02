const express = require("express");
const cors = require("cors");
const dbConnect = require("./src/database/database");
const routes = require("./src/routes/route");

const app = express();
const PORT = process.env.PORT || 5000; // Use port 5000 by default

app.use(cors()); // Enable CORS for all routes

app.use(express.json());

// Connect to the database
dbConnect();

// Define routes
app.use("/api/v1", routes);

app.get("/", (req, res) => {
  res.send("Namaste LMS");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port number ${PORT}`);
});
