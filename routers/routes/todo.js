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
const authorization = require("./../Middelware/authorization");

const todosRouter = express.Router();

todosRouter.post("/todos", authentication, createTodo);  
todosRouter.get("/todos/:id", authentication,authorization, getOnetodo);  
todosRouter.put("/todos/:id", authentication, updateTodo); 
todosRouter.delete("/todos/:id", authentication,authorization, deleteTodo);
todosRouter.get("/todos", authentication, getAllTodos);
todosRouter.get("/delete", authentication, getDeletedTodo);

module.exports = todosRouter;
