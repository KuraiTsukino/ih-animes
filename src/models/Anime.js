// 1. Importaciones

const mongoose = require("mongoose")
const Schema = mongoose.Schema

// 2. Esquema

const animeSchema = new Schema({
    name: String,
    description: String,
    rating: String,
    episodio: Number,
    categoría: String,
    studio: String,
    img: String
}, {timestamps: true})

// 3. Modelo

const Anime = mongoose.model('Anime', animeSchema)

// 4. Exportación

module.exports = Anime 