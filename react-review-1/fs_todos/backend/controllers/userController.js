const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });

const userFunctions = {
  register: async (req, res) => {
    try {
      const { email, password } = req.body;
      const existingUser = await User.findOne({ email });

      if (existingUser)
        res.status(400).json({
          message: " Email is already in use !",
        });
      // where we would use Bcrypt but we abstracted it
      // to our User Model

      const user = await User.create({
        email,
        password,
      });

      res.status(201).json({
        message: " User was successfully created ",
        data: user,
      });
    } catch (error) {
      console.error(error);
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user)
        return res.status(400).json({
          message: " User not Found !",
        });
      const match = await bcrypt.compare(password, user.password);
      if (!match)
        return res.status(400).json({
          message: " Incorrect Password !",
        });
      // we need JWT to make this work
      const token = createToken(user._id);
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = userFunctions;
