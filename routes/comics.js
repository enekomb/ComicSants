const express = require("express");
const router = express.Router();

router.get("/", function (request, response) {
    let db = request.app.locals.db;
    db.collection("comics")
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
    db.collection("comics").insertOne(request.body);
    response.send({});
});

router.put("/", function (request, response) {
    let db = request.app.locals.db;

    db.collection("comics").updateMany(
        { isbn: request.body.isbn },
        {
            $set: {
                nombre: request.body.nombre,
                autor: request.body.autor,
                editorial: request.body.editorial,
                precio: request.body.precio,
                paginas: request.body.paginas,
                ejemplares: request.body.ejemplares,
                genero: request.body.genero,
                isbn: request.body.isbn,
                img: request.body.img,
            },
        }
    );

    response.send({});
});

router.delete("/", function (request, res) {
    let db = request.app.locals.db;
    db.collection("comics").deleteOne({ isbn: request.body.isbn });
    res.send({});
});

module.exports = router;
