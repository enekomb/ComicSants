const express = require("express");
const mongodb = require("mongodb");
// const bcrypt = require("bcrypt");

let cards = require("./routes/cards");
let clients = require("./routes/clients");
let tables = require("./routes/tables");
let snacks = require("./routes/snacks");
let products = require("./routes/products");
let comics = require("./routes/comics");
let sales = require("./routes/sales");

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
// app.use("/serve", express.static("public/serve/serve.html"));
// app.use("/reports", express.static("public/reports/reports.html"));
// app.use("/stock", express.static("public/stock/stock.html"));
// app.use("/sales", express.static("public/sales/sales.html"));

app.use("/admins/admin", admins);
app.use("/clients/client", clients);
app.use("/cards/card", cards);
app.use("/tables/table", tables);
app.use("/snacks/snack", snacks);
app.use("/products/product", products);
app.use("/comics/comic", comics);
app.use("/sales/sale", sales);
