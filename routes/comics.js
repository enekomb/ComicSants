const express = require("express");
const router = express.Router();

router.get("/", function (request, response) {
    let db = request.app.locals.db;
    db.collection("comics")
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
    db.collection("comics").insertOne(request.body);
    response.send({});
});

router.put("/", function (request, response) {
    let db = request.app.locals.db;

    db.collection("comics").updateMany(
        { isbn: request.body.isbn },
        {
            $set: {
                name: request.body.name,
                author: request.body.author,
                publisher: request.body.publisher,
                price: request.body.price,
                pages: request.body.pages,
                copies: request.body.copies,
                genre: request.body.genre,
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
