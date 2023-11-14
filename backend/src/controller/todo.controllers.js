// business logic

import { Todo } from "../models/todo.model.js";

export const addTodo = async (req, res) => {
  try {
    console.log("Adding Todo");

    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.status(201).send(newTodo);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const getTodos = async (req, res) => {
  try {
    console.log(`Getting Todos`);

    const todos = await Todo.find({});
    res.status(200).send(todos);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const updateTodo = async (req, res) => {
  const requestId = req.params.id;
  console.log(`requestId :: ${requestId}`);
  console.log(`body :: ${req.body}`);

  try {
    console.log(`Updating todo`);

    const todo = await Todo.findOneAndUpdate(requestId, req.body);
    res.status(200).send(todo);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const deleteTodo = async (req, res) => {
  const requestId = req.params.id;
  try {
    console.log(`Deleting Todo`, requestId);

    const todo = await Todo.deleteOne({ id: requestId });
    res.status(200).send(todo);
  } catch (err) {
    res.status(400).send(err);
  }
};