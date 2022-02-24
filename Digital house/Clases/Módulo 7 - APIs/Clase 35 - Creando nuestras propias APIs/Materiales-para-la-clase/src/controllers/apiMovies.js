const db = require("../database/models");
const {Movie} = require("../database/models")
const moviesController = require("./moviesController")
const fetch = require("node-fetch")

module.exports = {
    show: async (req, res) => {
        const apiMovie = req.query
        const endPoint = `http://www.omdbapi.com/?apikey=27cf9764&s=${apiMovie}`
        const movies = await Movie.findAll({include: ["genre"]});
        const moviesFromApi = await fetch(endPoint).then(response => {return response.json()})
        

        return res.json({total: movies.length, movies: movies})
    },
    store: async (req, res) => {
        const movie = await Movie.create(req.body)

        return res.json({
            data: movie, 
            status: 200, 
            create: "Ok"})
    },
    detail: async (req, res) => {
        const movie = await Movie.findByPk(req.params.id, {include: ["genre"]})
        return res.json(movie)
    },
    delete: async (req, res) => {
        await Movie.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.json(movie)
    },

}
