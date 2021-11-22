var express = require("express");
var router = express.Router();

const Todo = require("../models/Todo");
const jwt = require("jsonwebtoken");
const privateKey = process.env.JWT_PRIVATE_KEY;

// Router-level Middleware
router.use(function (req, res, next) {
  console.log(req.header("Authorization"));
  if (req.header("Authorization")) {
    try {
      req.payload = jwt.verify(req.header("Authorization"), privateKey, {
        algorithms: ["RS256"],
      });
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  } else {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
});

router.get("/", async function (req, res, next) {
  const todos = await Todo.find().where("id").equals(req.payload.id).exec();
  return res.status(200).json(todos);
});

router.get("/:id", async function (req, res, next) {
  //const todos = await Todo.find().where("id").equals(req.payload.id).exec();
  // Mongoose find query to retrieve post where todoId == req.params.todoID
  const todo = await Todo.findOne().where("_id").equals(req.params.id).exec();
  return res.status(200).json({ todos: todos });
});

router.post("/", async function (req, res) {
  const todos = new Todo({
    title: req.body.title,
    description: req.body.description,
    dateCreated: req.body.dateCreated,
    dateCompleted: req.body.dateCompleted,
    id: req.payload.id,
  });

  await todos
    .save()
    .then((savedTodo) => {
      return res.status(201).json({
        id: savedTodo._id,
        title: savedTodo.title,
        description: savedTodo.description,
        dateCreated: savedTodo.dateCreated,
        dateCompleted: savedTodo.dateCompleted,
      });
    })
    .catch((error) => {
      return res.status(500).json({ error: error.message });
    });
});

module.exports = router;
