const {Genre} = require("../database/models")
const genreController = require("./genresController");

module.exports = {
    list: async (req, res) => {
        const genres = await Genre.findAll();
        return res.json({
            meta: {
                status: 200,
                total: genres.length,
                url: "api/genres"
            },
            data: genres 
        })
    },
    detail: async (req, res) => {
        const genre = await Genre.findByPk(req.params.id)
        return res.json(genre)
    }
}
