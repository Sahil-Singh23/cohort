const mongoose = require("mongoose");

//import this classes form the mongoose library
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

// first create the scehme of the database
const user = new Schema({
  email: String,
  password: String,
  name: String,
});

const todo = new Schema({
  title: String,
  done: boolean,
  userId: ObjectId,
});

//now we need a model

const UserModel = mongoose.model("users", user);
const TodoModel = mongoose.model("todos", todo);

module.exports = {
  UserModel: UserModel,
  TodoModel: TodoModel,
};
