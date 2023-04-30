require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./sequelize/models/index");
const router = require("./routes/index");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

db.sequelize
  .sync({ logging: false })
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;
