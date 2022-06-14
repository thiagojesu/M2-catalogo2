<<<<<<< HEAD
require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
const routes = require("./src/routes/routes");

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

const port = process.env.PORT || 3000;

=======
require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
const routes = require("./src/routes/routes");

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

const port = process.env.PORT || 3000;

>>>>>>> 4d2835c87b53d2d18137b1a99e4cd938de2d5d17
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));