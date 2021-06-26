const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Movie = require("./Movie").schema;

const actorSchema = new Schema({
  name: String,
  movies: [{type: Schema.Types.ObjectId, ref: 'movie'}],
  description: String,
  image: String,
});

const Actor = mongoose.model("actor", actorSchema);

module.exports = Actor;
