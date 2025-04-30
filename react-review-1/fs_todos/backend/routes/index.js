const Router = require("express").Router();
// localhost:8080/api
Router.get("/", (req, res) => {
  res.send("Hello I am in the API route");
});

Router.use("/todos", require("./api/todosRoutes"));
Router.use("/auth", require("./api/authRoutes"));

module.exports = Router;
