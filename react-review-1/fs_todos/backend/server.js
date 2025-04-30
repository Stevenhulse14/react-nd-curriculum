// basic server

const express = require("express");
// Middleware
const cors = require("cors");
const logger = require("morgan");

// Import connect to DB
const connectDB = require("./config/db");

const app = express();

// connection
connectDB();

const Port = 8000;

app.use(logger("dev"));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// localhost:8080/
app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api", require("./routes"));

app.listen(Port, () => {
  console.log(` Up and Running on PORT : ${Port}`);
});
