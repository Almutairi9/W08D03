const todosModel = require("../../db/models/todo");

const createTodo = (req, res) => {
  if (!req.token.deleted) {
    const { task } = req.body;

    const newTodo = new todosModel({
      task,
      user: req.token.id,
    });

    newTodo
      .save()
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } else {
    res.status(404).json({ message: "your user is deleted .." });
  }
};

const getOnetodo = (req, res) => {
  if (!req.token.deleted) {
    const { id } = req.params;

    todosModel
      .findOne({ _id: id, deleted: false })
      .then((result) => {
        if (result) {
          res.status(200).json(result);
        } else {
          res
            .status(404)
            .json({ message: `there is no todo with the ID: ${id}` });
        }
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } else {
    res.status(404).json({ message: "your user is deleted .. " });
  }
};

const getAllTodos = (req, res) => {
  if (!req.token.deleted) {
    todosModel
      .find({ user: req.token.id, deleted: false })
      .then((result) => {
        if (result.length > 0) {
          res.status(200).json(result);
        } else {
          res.status(404).json({ message: "there is no add tasks !" });
        }
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } else {
    res.status(404).json({ message: "your user is deleted .." });
  }
};

const getDeletedTodo = (req, res) => {
  if (!req.token.deleted) {
    todosModel
      .find({ user: req.token.id, deleted: true })
      .then((result) => {
        if (result.length > 0) {
          res.status(200).json(result);
        } else {
          res.status(404).json({ message: "There is no deleted tasks !" });
        }
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } else {
    res.status(404).json({ message: "your user is deleted" });
  }
};

const deleteTodo = (req, res) => {
  if (!req.token.deleted) {
    const { id } = req.params;

    todosModel
      .findOneAndUpdate(
        { _id: id, deleted: false },
        { deleted: true },
        { new: true }
      )
      .then((result) => {
        if (result) {
          res.status(200).json(result);
        } else {
          res.status(404).json({ message: `there is no task with ID: ${id}` });
        }
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } else {
    res.status(404).json({ message: "your user is deleted" });
  }
};

const updateTodo = (req, res) => {
  if (!req.token.deleted) {
    const { id } = req.params;
    const { task } = req.body;

    todosModel
      .findOneAndUpdate(
        { _id: id, deleted: false },
        { task: task },
        { new: true }
      )
      .then((result) => {
        if (result) {
          res.status(200).json(result);
        } else {
          res.status(404).json({ message: `there is no task with ID: ${id}` });
        }
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } else {
    res.status(404).json({ message: "your user is deleted" });
  }
};

// Admin ...
const deleteTodoByAdmin = (req, res) => {
  if (!req.token.deleted) {
    const { id } = req.params;

    todosModel
      .findOneAndUpdate(
        { _id: id, deleted: false },
        { deleted: true },
        { new: true }
      )
      .then((result) => {
        if (result) {
          res.status(200).json(result);
        } else {
          res.status(404).json({ message: `there is no task with ID: ${id}` });
        }
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } else {
    res.status(404).json({ message: "your user is deleted" });
  }
};

const getAllTodosByAdmin = (req, res) => {
  const id = req.params.id;  // id for any user
  if (!req.token.deleted) {
    todosModel
      .find({ user: id, deleted: false })
      .then((result) => {
        if (result.length > 0) {
          res.status(200).json(result);
        } else {
          res.status(404).json({ message: "there is no add tasks !" });
        }
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } else {
    res.status(404).json({ message: "your user is deleted .." });
  }
};
module.exports = {
  createTodo,
  getOnetodo,
  deleteTodo,
  updateTodo,
  getDeletedTodo,
  getAllTodos,
  // BY ADMIN .....
  deleteTodoByAdmin, 
  getAllTodosByAdmin, 
};
