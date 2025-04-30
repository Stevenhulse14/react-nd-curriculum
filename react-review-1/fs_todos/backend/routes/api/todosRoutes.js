const Router = require("express").Router();
const {
  getTodos,
  createTodos,
  updateTodos,
  deleteTodos,
} = require("../../controllers/todosController");

// localhost:8080/api/todos
Router.get("/", getTodos);

Router.post("/", createTodos);

// dynamic routes
Router.put("/:id", updateTodos);

Router.delete("/:id", deleteTodos);

module.exports = Router;
