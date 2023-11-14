import express from "express";
import {
  addTodo,
  updateTodo,
  deleteTodo,
  getTodos,
} from "../controller/todo.controllers.js";

const router = express.Router();

// add a todo
router.post("/", addTodo);
// get todos
router.get("/", getTodos);
// update a todo
router.put("/:id", updateTodo);
// remove a todo
router.delete("/:id", deleteTodo);

export default router;
