const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes/index");
const expressLayouts = require("express-ejs-layouts");

const db = require("./config/db");
db.sync()
  .then(() => console.log("DB ok!"))
  .catch((error) => console.log(error));

require("dotenv").config({ path: "var.env" });

// Habilita el uso de ejs como template engine
app.use(expressLayouts);
app.set("view engine", "ejs");

//regustra la ubicacion de las vistas
app.set("views", path.join(__dirname, "./views"));

//custom middleware
app.use((req, res, next) => {
  let date = new Date();
  res.locals.year = date.getFullYear();
  next();
});
// usa las rutas creadas en "routes"
app.use("/", routes());

//usa la carpeta static para contenido s
app.use(express.static("public"));

//inicia el server
app.listen(process.env.PORT, () => {
  console.log("Funciona el server en el puerto " + process.env.PORT);
});
