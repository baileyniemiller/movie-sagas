const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// start GET to /details/:id
router.get("/:id", (req, res) => {
  const movieId = req.params.id;
  // setting query text to select the details only from the movie clicked
  const queryText = `SELECT movies.title, movies.poster, array_agg(name) AS genres FROM movies
                     JOIN movies_genres ON movies_genres.movie_id = movies.id
                     JOIN genres ON movies_genres.genre_id = genres.id
                     GROUP BY movies.title, movies.poster;`;
  pool
    .query(queryText, [movieId])
    .then((result) => {
      console.log('Success in getting movie details!');
      res.send(result.rows); // send the result --> the movies
    })
    .catch((error) => {
      console.log(`Error on GET details with query ${error}`);
      res.sendStatus(500); // if there is an error, send server error 500
    });
});
// end GET to /details/:id


module.exports = router;