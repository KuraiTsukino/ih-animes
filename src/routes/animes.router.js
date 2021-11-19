// 1. Importaciones

const express = require("express")

// Importación de ruteador.
const router= express.Router()

const animeController = require("./../controllers/animes.controller")

console.log(animeController)

// Creación de rutas
// Obtener los animes o mostrar en pantalla
router.get("/", animeController.getAnimes)
// query params
router.put("/:id/update", animeController.putAnimes)

module.exports = router