const Router = require("express").Router();
const User = require("../../models/User");
const { register, login } = require("../../controllers/userController");
// localhost:8080/api/auth/users
Router.get("/users", async (req, res) => {
  // get the users
  const users = await User.find({});
  res.send(users);
});
// localhost:8080/api/auth/register
Router.post("/register", register);

Router.post("/login", login);

module.exports = Router;
