const Mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // try bcryptjs if your having issues

const userSchema = new Mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// VERY COOL STUFF !!!

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = 10;
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = Mongoose.model("User", userSchema);
