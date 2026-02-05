const express = require("express");
const router = express.Router();

router.get("/", function (request, response) {
    let db = request.app.locals.db;
    db.collection("cards")
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
    db.collection("cards").insertOne(request.body);
    response.send({});
});

router.put("/", function (request, response) {
    let db = request.app.locals.db;

    db.collection("cards").updateMany(
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

router.delete("/", function (request, res) {
    let db = request.app.locals.db;
    db.collection("cards").deleteOne({ ean: request.body.ean });
    res.send({});
});

module.exports = router;
