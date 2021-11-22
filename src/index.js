// 1. Importaciones. Variables globales.
const express = require("express")
const app = express()

require("dotenv").config()

// Para exportar la carpeta public necesita el path

const path = require('path')

const connectDB = require("./config/db")

// Importación del body-parser

const bodyParser = require("body-parser")

// 2. Middlewares. Es una función que se ejecuta después de recibir una petición y antes de dar una respuesta.
// Trabajar con archivos estáticos

app.use(express.static(path.join (__dirname, 'public')))

app.use(bodyParser.urlencoded({extended:true}))

// Configuraciones

app.set("views", path.join(__dirname, 'views'))
app.set("view engine", "hbs")

connectDB()

//__dirname da la ruta del archivo en donde estoy trabajando

// 3. Rutas

// Home

app.get("/", (req, res) => {
    res.render("index")
})

// Separar carpetas de rutas y controles.

// Animes

app.use("/animes", require('./routes/animes.router'))

// 4. Servidor

app.listen(process.env.PORT, () => {
    console.log (`Servidor activo en http://localhost:${process.env.PORT}`) 
})