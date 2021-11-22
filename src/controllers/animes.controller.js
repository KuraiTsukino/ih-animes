// 1. Importaciones

const Anime = require("./../models/Anime")
const getAnimes = async (req, res) => {
    const animes = await Anime.find({})
    res.render ("allAnimes", {animes})
}

// Para editar los animes. 

const putAnimes = async(req, res) => {

    // destructuración de objetos 

    // Parámetros de la url
    const {id} = req.params
    //console.log(id) <-- cuando aplicamos el método put en postman, nos regresa en la terminal el id.

    // Datos del formulario body-parser
    const { img } = req.body

    await Anime.findByIdAndUpdate(id, {img}, {new:true})
    res.redirect("/animes")

}

// Exportación de getAnimes dentro de un objeto, porque se pueden meter varias funciones.
module.exports = { getAnimes, putAnimes }