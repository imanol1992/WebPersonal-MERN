//AQUI IRA TODA LA CONFIGURACION DE EXPRESS
//CTRL + C PARA PARAR EL SERVIDOR

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { API_VERSION } = require("./constants");

const app = express();


//Import routings
const authRoutes = require("./router/auth");


//Configure Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Configure static folder ( podemos configurar tantas carpetas como queramos...aquí subimos las imágenes)
app.use(express.static("uploads"));

//Configure Header HTTP - CORS
app.use(cors());

//Configure routings
app.use(`/api/${API_VERSION}`, authRoutes)


module.exports = app;