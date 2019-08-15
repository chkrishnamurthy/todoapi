import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Todo", todoSchema);
