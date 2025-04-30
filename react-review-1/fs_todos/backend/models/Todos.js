const Mongoose = require("mongoose");

const todoSchema = new Mongoose.Schema(
  {
    userID: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: [true, "Please add a title"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = Mongoose.model("Todo", todoSchema);
