const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");
const User = require("../models/User");
const Actor = require("../models/Actor");


router.get("/", (req, res, next) => {
  res.send("Start by using /api/movies to get all movies!");
});

/////////////////////////
//       MOVIES        //
/////////////////////////
router.get("/movies", (req, res, next) => {
  //this will return all the data, exposing only the id and action field to the client
  Movie.find({}, "movie")
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/movies", (req, res, next) => {
  let movie = new Movie();
  movie.name = req.body.name;
  movie.description = req.body.description;
  movie.image = req.body.imageURL;
  movie.date = req.body.date;
  movie.runningTime = req.body.runningTime;
  movie.trailer = req.body.trailer;
  movie.cast = [];
  movie.rating = 0;
  movie.reviews = [];
  movie.meta = {
    likes: 0,
  };

  console.log(movie);

  movie.save((err, movie) => {
    if (err) return next(err);
    res.status(201);
  });
});

router.delete("/movies/:id", (req, res, next) => {
  Movie.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

/////////////////////////
//       USERS         //
/////////////////////////

// ADD LATER

// router.get("/users", (req, res, next) => {
//   //this will return all the data, exposing only the id and action field to the client
//   User.find({}, "user")
//     .then((data) => res.json(data))
//     .catch(next);
// });

// router.post("/users", (req, res, next) => {
//   const body = req.body
//   let user = new User({
//     name: body.username,
//     password: body.password,
//     email: body.email,
//     description: body.description,
//     image: body.image,
//     likes: [],
//   })
// });

// router.delete("/users/:id", (req, res, next) => {
//   User.findOneAndDelete({ _id: req.params.id })
//     .then((data) => res.json(data))
//     .catch(next);
// });

/////////////////////////
//       ACTORS        //
/////////////////////////

router.get("/actors", (req, res, next) => {
  //this will return all the data, exposing only the id and action field to the client
  Actor.find({}, "actor")
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/actors", (req, res, next) => {
  if (req.body.action) {
    Actor.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: "The input field is empty",
    });
  }
});

router.delete("/actors/:id", (req, res, next) => {
  Actor.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
