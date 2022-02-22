const express = require("express");
const router = express.Router();

const movieController = require("../controllers/apiMovies")
const genreController = require("../controllers/apiGenres")

//movie
router.get("/movies", movieController.show);
router.post("/movies", movieController.store);
router.get("/movie/detail/:id", movieController.detail);
router.delete("/movie/detail/:id", movieController.delete);

//genre
router.get("/genres", genreController.list);
router.get("/genres/:id", genreController.detail);

// router.get("/genres");

// router.get("/actors")

module.exports = router;