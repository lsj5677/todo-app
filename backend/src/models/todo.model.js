import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  id: String,
  task: String,
  status: String,
});

export const Todo = mongoose.model("Todo", TodoSchema);
