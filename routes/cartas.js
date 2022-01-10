const express = require("express");
const router = express.Router();

router.get("/", function (request, response) {
    let db = request.app.locals.db;
    db.collection("cartas")
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
router.post("/", function (request, response) {
    let db = request.app.locals.db;
    db.collection("cartas").insertOne(request.body);
    response.send({});
});

router.put("/", function (request, response) {
    let db = request.app.locals.db;

    db.collection("cartas").updateMany(
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

router.delete("/", function (request, res) {
    let db = request.app.locals.db;
    db.collection("cartas").deleteOne({ ean: request.body.ean });
    res.send({});
});

module.exports = router;
