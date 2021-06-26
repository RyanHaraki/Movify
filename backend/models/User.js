const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Movie = require("./Movie").schema;

const userSchema = new Schema({
  name: String,
  password: String,
  email: String,
  description: String,
  image: String,
  likes: [{type: Schema.Types.ObjectId, ref: 'movie'}],
});

const User = mongoose.model("user", userSchema);

module.exports = User;
