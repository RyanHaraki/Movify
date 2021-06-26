const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: String,
  description: String,
  image: String,
  date: Date,
  runningTime: Number,
  trailer: String,
  cast: [{type: Schema.Types.ObjectId, ref: 'actor'}],
  rating: Number,
  reviews: [
    {
      author: String,
      title: String,
      text: String,
      rating: Number,
    },
  ],
  meta: {
    likes: Number,
  },
});

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;
