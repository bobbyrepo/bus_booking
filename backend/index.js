const express = require("express");
const app = require("./src/app.js");
const mongoose = require("mongoose");
const port = 5000;
require("dotenv").config();

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
const DATABASE_URL =
  "mongodb+srv://Bobby:Sahi1Atlas@cluster0.rx7qkbf.mongodb.net/bus_booking";
mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((error) => {
    console.log("database connection failed. exiting now...");
    console.error(error);
    process.exit(1);
  });

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`));
