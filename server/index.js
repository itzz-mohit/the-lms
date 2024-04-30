const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const routes = require("./src/routes/route");
app.use("/api/v1", routes);

app.get("/", (req, res) => {
  res.send("Namaste LMS");
});

app.listen(PORT, () => {
  console.log(`Server running of port number ${PORT}`);
});

const dbConnect = require("./src/database/database");
dbConnect();
