// 1. Importaciones

const Anime = require("./../models/Anime")
const getAnimes = async (req, res) => {
    const animes = await Anime.find({})
    res.render ("allAnimes", {animes})
}

const putAnimes = async(req, res) => {
    // Parámetros de la url
    const {id} = req.params
    // Datos del formulario body-parser
    const {img} = req.body

    const animeActualizado = await Anime.findByIdAndUpdate(id, {img}, {new:true})
    res.redirect("/animes")

    // destructuración de objetos 
}

// Exportación de getAnimes dentro de un objeto, porque se pueden meter varias funciones.
module.exports = { getAnimes, putAnimes }