const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  dateCreated: { type: String, required: true },
  dateCompleted: { type: String, required: false },
  userID: { type: Schema.Types.ObjectId, ref: "User" },
  //userID: { type: String, ref: "User" },
});

//Export model
module.exports = mongoose.model("Todo", TodoSchema);
