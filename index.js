const express = require("express");
const app = express();
const path = require("path")
const routes = require("./routes/index")
require("dotenv").config({path: "var.env"});

// Habilita el uso de ejs como template engine
app.set("view engine", "ejs");

//regustra la ubicacion de las vistas
app.set("views", path.join(__dirname,"./views"));

// usa las rutas creadas en "routes"
app.use("/", routes())

//usa la carpeta static para contenido s
app.use(express.static("static"));

//inicia el server
app.listen(process.env.PORT, ()=>{
    console.log("Funciona el server")
})