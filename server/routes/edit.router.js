const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// start PUT to /edit/:id
router.put("/:id", (req, res) => {
  const movieId = req.params.id;
  const movie = req.body;
  // setting query text to update the title and description
  const queryText = `UPDATE movies SET title=$1 description=$2 WHERE id=$3`;
  pool
    .query(queryText, [movie.title, movie.description, movieId])
    .then((result) => {
      console.log("Success in updating movie title and description!");
      res.send(result.rows); 
    })
    .catch((error) => {
      console.log(`Error on PUT with query ${error}`);
      res.sendStatus(500); // if there is an error, send server error 500
    });
});
// end PUT to /edit/:id

module.exports = router;
