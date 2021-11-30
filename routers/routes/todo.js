const express = require("express");
const {
  createTodo,
  getOnetodo,
  deleteTodo,
  updateTodo,
  getDeletedTodo,
  getAllTodos,
} = require("./../controller/todo");
const authentication = require("./../Middelware/Authentication");

const todosRouter = express.Router();

todosRouter.post("/todos", authentication, createTodo);
todosRouter.get("/todos/:id", authentication, getOnetodo);
todosRouter.put("/todos/:id", authentication, updateTodo);
todosRouter.delete("/todos/:id", authentication, deleteTodo);
todosRouter.get("/todos", authentication, getAllTodos);
todosRouter.get("/todos", authentication, getDeletedTodo);

module.exports = todosRouter;
