const express = require("express");
const mongodb = require("mongodb");
// const bcrypt = require("bcrypt");

let cartas = require("./routes/cartas");
let clientes = require("./routes/clientes");
let mesas = require("./routes/mesas");
let snacks = require("./routes/snacks");
let productos = require("./routes/productos");
let comics = require("./routes/comics");
let ventas = require("./routes/ventas");

let admins = require("./routes/admins");

let app = express();
app.listen(3000);

let MongoClient = mongodb.MongoClient;

MongoClient.connect(
    "mongodb+srv://uri:1234@cluster0.ax7aa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    function (err, client) {
        if (err !== undefined) {
            console.log("hey", err);
        } else {
            app.locals.db = client.db("comicsants");
        }
    }
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", express.static("public"));
// app.use("/home", express.static("public/home/home.html"));
// app.use("/atender", express.static("public/atender/atender.html"));
// app.use("/informes", express.static("public/informes/informes.html"));
// app.use("/stock", express.static("public/stock/stock.html"));
// app.use("/ventas", express.static("public/ventas/ventas.html"));

app.use("/admins/admin", admins);
app.use("/clientes/cliente", clientes);
app.use("/cartas/carta", cartas);
app.use("/mesas/mesa", mesas);
app.use("/snacks/snack", snacks);
app.use("/productos/producto", productos);
app.use("/comics/comic", comics);
app.use("/ventas/venta", ventas);
