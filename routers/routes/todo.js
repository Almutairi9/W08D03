const express = require("express");
const {
  createTodo,
  getOnetodo,
  deleteTodo,
  updateTodo,
  getDeletedTodo,
  getAllTodos,
  deleteTodoByAdmin,
  getAllTodosByAdmin,
} = require("./../controller/todo");
const authentication = require("./../Middelware/Authentication");
const authorization = require("./../Middelware/authorization");

const todosRouter = express.Router();

todosRouter.post("/todos", authentication, createTodo);
todosRouter.get("/todos/:id", authentication, getOnetodo);
todosRouter.put("/todos/:id", authentication, updateTodo);
todosRouter.delete("/todos/:id", authentication, deleteTodo);
todosRouter.get("/todos", authentication, getAllTodos);
todosRouter.get("/delete", authentication, getDeletedTodo);

//by Admin ...
todosRouter.delete("/todosADMIN/:id", authentication, authorization, deleteTodoByAdmin);
todosRouter.get("/todosADMIN/:id", authentication, authorization, getAllTodosByAdmin);
//  gettodos أسوي رواتر للادمن بحيث يدخل عليهم ويحذف ويعرض المستخدمين  ويكون فيها authorization  بسس

module.exports = todosRouter;