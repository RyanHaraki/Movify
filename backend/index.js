const express = require("express");
const mongoose = require("mongoose");
const routes = require("./api/api");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

// Connect to DB
mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connection to DB was made"))
  .catch((err) => console.error(err));

mongoose.Promise = global.Promise;

// Header stuff makes configuration easier
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api", routes);


app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
