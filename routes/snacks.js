const express = require("express");
const router = express.Router();

router.get("/", function (request, response) {
    let db = request.app.locals.db;
    db.collection("snacks")
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

    db.collection("snacks").updateMany(
        { nombre: request.body.nombre },
        {
            $set: {
                nombre: request.body.nombre,
                precio: request.body.precio,
                ejemplares: request.body.ejemplares,
                genero: request.body.genero,
                img: request.body.img,
            },
        }
    );

    response.send({});
});

router.delete("/", function (request, res) {
    let db = request.app.locals.db;
    db.collection("snacks").deleteOne({ nombre: request.body.nombre });
    res.send({});
});

router.post("/", function (request, response) {
    let db = request.app.locals.db;
    db.collection("snacks").insertOne(request.body);
    response.send({});
});

module.exports = router;
