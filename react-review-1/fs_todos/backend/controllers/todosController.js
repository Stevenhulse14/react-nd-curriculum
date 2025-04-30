const Todo = require("../models/Todos");

const todoActions = {
  getTodos: async (req, res) => {
    try {
      const todos = await Todo.find();
      res.send(todos);
    } catch (error) {
      console.error(error);
    }
  },
  createTodos: async (req, res) => {
    try {
      const data = req.body;
      const newTodo = new Todo(data);
      await newTodo.save();
      res.status(201).json({
        message: "Created a Todo",
        data: data,
      });
    } catch (error) {
      console.error(error);
    }
  },
  updateTodos: async (req, res) => {
    try {
      const todo = await Todo.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
    } catch (error) {
      console.error(error);
    }
  },
  deleteTodos: async (req, res) => {
    try {
      const todo = await Todo.findOneAndDelete({
        _id: req.params.id,
      });
      if (!todo)
        return res.status(404).json({
          message: " Todo Not Found",
        });
      res.status(200).json({
        message: "Todo Deleted",
      });
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = todoActions;
