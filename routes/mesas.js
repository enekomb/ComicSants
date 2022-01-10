const express = require("express");
const router = express.Router();

router.get("/", function (request, response) {
    let db = request.app.locals.db;
    db.collection("mesas")
        .find()
        .toArray(function (err, datos) {
            if (err != undefined) {
                console.log(err);
                response.send({ mensaje: "error: " + err });
            } else {
                response.send(datos);
            }
        });
});

router.put("/", function (request, response) {
    let db = request.app.locals.db;

    db.collection("mesas").updateMany(
        { ean: request.body.ean },
        {
            $set: {
                nombre: request.body.nombre,
                precio: request.body.precio,
                ejemplares: request.body.ejemplares,
                genero: request.body.genero,
                ean: request.body.ean,
                img: request.body.img,
            },
        }
    );

    response.send({});
});

router.post("/", function (request, response) {
    let db = request.app.locals.db;
    db.collection("mesas").insertOne(request.body);
    response.send({});
});

router.delete("/", function (request, res) {
    let db = request.app.locals.db;
    db.collection("mesas").deleteOne({ ean: request.body.ean });
    res.send({});
});

module.exports = router;
