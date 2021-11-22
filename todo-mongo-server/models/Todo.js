const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dateCreated: { type: Date, required: true },
  dateCompleted: { type: Date, required: false },
  id: { type: Schema.Types.ObjectId, ref: "User" },
});

//Export model
module.exports = mongoose.model("Todo", TodoSchema);
