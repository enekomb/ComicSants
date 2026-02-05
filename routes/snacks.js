const express = require("express");
const router = express.Router();

router.get("/", function (request, response) {
    let db = request.app.locals.db;
    db.collection("snacks")
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

    db.collection("snacks").updateMany(
        { name: request.body.name },
        {
            $set: {
                name: request.body.name,
                price: request.body.price,
                copies: request.body.copies,
                genre: request.body.genre,
                img: request.body.img,
            },
        }
    );

    response.send({});
});

router.delete("/", function (request, res) {
    let db = request.app.locals.db;
    db.collection("snacks").deleteOne({ name: request.body.name });
    res.send({});
});

router.post("/", function (request, response) {
    let db = request.app.locals.db;
    db.collection("snacks").insertOne(request.body);
    response.send({});
});

module.exports = router;
