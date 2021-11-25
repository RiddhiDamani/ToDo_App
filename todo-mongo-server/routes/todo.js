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
      //console.log(req.payload);
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  } else {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
});

// GET User-specific todos
router.get("/", async function (req, res, next) {
  console.log(req.payload);
  const todos = await Todo.find().where("userID").equals(req.payload.id).exec();
  return res.status(200).json({ todos: todos });
});

// POST Request
router.post("/", async function (req, res) {
  const todos = new Todo({
    title: req.body.title,
    description: req.body.description,
    dateCreated: req.body.dateCreated,
    dateCompleted: req.body.dateCompleted,
    userID: req.payload.id,
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
        userID: savedTodo.userID,
      });
    })
    .catch((error) => {
      return res.status(500).json({ error: error.message });
    });
});

// DELETE Request
router.delete("/:_id", async function (req, res, next) {
  console.log(
    "------------------------Inside Delete Request------------------------"
  );
  //console.log(req);
  //console.log(req.params.id);
  //console.log(req.body);
  if (req.body.username) {
    const todo = await Todo.findByIdAndRemove(req.params._id).exec();
    console.log("GOT A DELETE REQ");
    return res.status(200).json(todo);
  }
  res.status(400).json({ error: "Missing username or userid in req body" });
});

// PATCH Request
router.patch("/:_id", async function (req, res, next) {
  console.log(
    "------------------------Inside PATCH Request------------------------"
  );
  console.log(req.body);
  if (req.body.username) {
    const todo = await Todo.findByIdAndUpdate(req.params._id, {
      dateCompleted: req.body.dateCompleted,
    }).exec();
    console.log("GOT A TOGGLE REQ");
    return res.status(200).json(todo);
  } else {
    res.status(400).json({ error: "Missing username in request body" });
  }
});

module.exports = router;
