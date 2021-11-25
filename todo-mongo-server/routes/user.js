var express = require("express");
var router = express.Router();

const Todo = require("../models/Todo");
const User = require("../models/User");

// GET all registered users
router.get("/", async function (req, res, next) {
  const users = await User.find().exec();
  //console.log("------------USERS LIST--------------");
  return res.status(200).json(users);
});

// GET profile page of specified user
router.get("/:_id", async function (req, res, next) {
  //console.log("------------USER PROFILE PAGE--------------");
  //console.log("Inside USERS request parameters:", req.params);
  const todos = await Todo.find().where("userID").equals(req.params._id).exec();
  return res.status(200).json(todos);
});

module.exports = router;
