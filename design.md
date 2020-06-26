## Initial Setup (base)
* Install dependencies
* Create database:
  - Name: saga_movies_weekend
  - Create the JOIN table

## Components

* Home Page --> 
  - display all movies: GET /movies (SELECT poster from table) POST
  - onClick of a movie, go to /details: need route to /details of that specific
    movie

* Details Page --> 
  - show details AND genres for selected movie GET SELECT from join table: POST
  - Two buttons:
    -> Back to List: back to home page (route to home)
    -> Edit: bring user to the edit page (route to /edit)

* Edit Page
  - be able to change title and description: PUT
  - Two buttons:
    -> Cancel: brings user back to details page (route to /details)
    -> Save: UPDATES the title and description in database & brings user to details page
       PUT - route to /details

## Set up server routes
(jotting down notes for queries)
* GET /movies SELECT * FROM movies
* POST /movies SELECT movie poster FROM movies
* PUT /movies UPDATE title, description FROM movies WHERE id=$1
--> create router for organization /movies
* Test in postman

create table 'movies_genres' (
  movies_genre_id SERIAL PRIMARY KEY,  
  move_id INT NOT NULL REFERENCES "movies",
  genre_id INT NOT NULL REFERENCES "genres"
);

SELECT title, name as genre_name FROM movies
JOIN movies_genres ON movies_genres.movie_id = movies.id
JOIN genres ON movies_genres.genre_id = genre.id;


SELECT movies.title, array_ag(name) as genres FROM movies
JOIN movies_genres ON movies_genres.movie_id = movies.id
JOIN genres ON movies_genres.genre_id = genres.id
GROUP BY movies.title;







