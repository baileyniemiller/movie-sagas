## Initial Setup (base)
* Install dependencies -- DONE
* Create database: -- DONE
  - Name: saga_movies_weekend -- DONE
  - Create the JOIN table -- DONE

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







