const express = require("express");
const router = express.Router();

router.get("/", function (request, response) {
    let db = request.app.locals.db;
    db.collection("tables")
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

router.put("/", function (request, response) {
    let db = request.app.locals.db;

    db.collection("tables").updateMany(
        { ean: request.body.ean },
        {
            $set: {
                name: request.body.name,
                price: request.body.price,
                copies: request.body.copies,
                genre: request.body.genre,
                ean: request.body.ean,
                img: request.body.img,
            },
        }
    );

    response.send({});
});

router.post("/", function (request, response) {
    let db = request.app.locals.db;
    db.collection("tables").insertOne(request.body);
    response.send({});
});

router.delete("/", function (request, res) {
    let db = request.app.locals.db;
    db.collection("tables").deleteOne({ ean: request.body.ean });
    res.send({});
});

module.exports = router;
