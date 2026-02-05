const express = require("express");
const router = express.Router();

router.get("/", function (request, response) {
    let db = request.app.locals.db;
    db.collection("clients")
        .find()
        .toArray(function (err, data) {
            if (err != undefined) {
                console.log(err);
                response.send({ message: "error: " + err });
            } else {
                response.send(data);
            }
        });
});

router.post("/", function (request, response) {
    let db = request.app.locals.db;
    db.collection("clients").insertOne(request.body);
    response.send({});
});

router.put("/", function (request, response) {
    let db = request.app.locals.db;

    db.collection("clients").updateMany(
        { dni: request.body.dni },
        {
            $set: {
                dni: request.body.dni,
                name: request.body.name,
                surname: request.body.surname,
                postalCode: request.body.postalCode,
                address: request.body.address,
                email: request.body.email,
                phone: request.body.phone,
            },
        }
    );

    response.send({});
});

router.delete("/", function (request, res) {
    let db = request.app.locals.db;
    db.collection("clients").deleteOne({ dni: request.body.dni });
    res.send({});
});
module.exports = router;
