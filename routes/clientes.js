const express = require("express");
const router = express.Router();

router.get("/", function (request, response) {
    let db = request.app.locals.db;
    db.collection("clientes")
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
    db.collection("clientes").insertOne(request.body);
    response.send({});
});

router.put("/", function (request, response) {
    let db = request.app.locals.db;

    db.collection("clientes").updateMany(
        { dni: request.body.dni },
        {
            $set: {
                dni: request.body.dni,
                nombre: request.body.nombre,
                apellido: request.body.apellido,
                cp: request.body.cp,
                direccion: request.body.direccion,
                correo: request.body.correo,
                telefono: request.body.telefono,
            },
        }
    );

    response.send({});
});

router.delete("/", function (request, res) {
    let db = request.app.locals.db;
    db.collection("clientes").deleteOne({ dni: request.body.dni });
    res.send({});
});
module.exports = router;
