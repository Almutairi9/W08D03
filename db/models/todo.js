const mongoose = require("mongoose");

const todo = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  deleted: {
    type: Boolean,
    required: true,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("todo", todo);
