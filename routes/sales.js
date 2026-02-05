const express = require("express");
const router = express.Router();

router.get("/", function (request, response) {
    let db = request.app.locals.db;
    db.collection("sales")
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
    console.log(request.body);
    db.collection("sales").insertMany(request.body);
    response.send({});
});

router.get("/report", function (request, response) {
    let db = request.app.locals.db;
    db.collection("sales")
        .find()
        .toArray(function (err, data) {
            if (err != undefined) {
                console.log(err);
                response.send({ message: "error: " + err });
            } else {
                console.log(data);
                let arraySnack = [];
                data.forEach((dataElement) => {
                    let found = false;
                    arraySnack.forEach((arrayElement) => {
                        if (arrayElement.name == dataElement.snackName) {
                            found = true;
                            arrayElement.quantity += parseFloat(
                                dataElement.snackQuantity
                            );
                        }
                    });
                    if (!found && dataElement.snackName != undefined) {
                        arraySnack.push({
                            name: dataElement.snackName,
                            quantity: parseFloat(dataElement.snackQuantity),
                        });
                    }
                });
                //TABLES
                let arrayTable = [];
                data.forEach((dataElement) => {
                    let found = false;
                    arrayTable.forEach((arrayElement) => {
                        if (arrayElement.name == dataElement.tableName) {
                            found = true;
                            arrayElement.quantity += parseFloat(
                                dataElement.tableQuantity
                            );
                        }
                    });
                    if (!found && dataElement.tableName != undefined) {
                        arrayTable.push({
                            name: dataElement.tableName,
                            quantity: parseFloat(dataElement.tableQuantity),
                        });
                    }
                });

                //CARDS

                let arrayCards = [];
                data.forEach((dataElement) => {
                    let found = false;
                    arrayCards.forEach((arrayElement) => {
                        if (arrayElement.name == dataElement.cardName) {
                            found = true;
                            arrayElement.quantity += parseFloat(
                                dataElement.cardQuantity
                            );
                        }
                    });
                    if (!found && dataElement.cardName != undefined) {
                        arrayCards.push({
                            name: dataElement.cardName,
                            quantity: parseFloat(dataElement.cardQuantity),
                        });
                    }
                });

                //COMICS

                let arrayComic = [];
                data.forEach((dataElement) => {
                    let found = false;
                    arrayComic.forEach((arrayElement) => {
                        if (arrayElement.name == dataElement.comicName) {
                            found = true;
                            arrayElement.quantity += parseFloat(
                                dataElement.comicQuantity
                            );
                        }
                    });
                    if (!found && dataElement.comicName != undefined) {
                        arrayComic.push({
                            name: dataElement.comicName,
                            quantity: parseFloat(dataElement.comicQuantity),
                        });
                    }
                });
                let obj = [
                    { name: "Snack", array: arraySnack },
                    { name: "Table", array: arrayTable },
                    { name: "Card", array: arrayCards },
                    { name: "Comic", array: arrayComic },
                ];
                console.log(arrayComic);
                response.send(obj);
            }
        });
});

router.get("/arraysnack", function (request, response) {
    let db = request.app.locals.db;
    db.collection("sales")
        .find()
        .toArray(function (err, data) {
            if (err != undefined) {
                console.log(err);
                response.send({ message: "error: " + err });
            } else {
                console.log(data);
                let arraySnack = [];
                data.forEach((dataElement) => {
                    let found = false;
                    arraySnack.forEach((arrayElement) => {
                        if (arrayElement.name == dataElement.snackName) {
                            found = true;
                            arrayElement.quantity += parseFloat(
                                dataElement.snackQuantity
                            );
                        }
                    });
                    if (!found && dataElement.snackName != undefined) {
                        arraySnack.push({
                            name: dataElement.snackName,
                            quantity: parseFloat(dataElement.snackQuantity),
                        });
                    }
                });

                let obj = [arraySnack];
                console.log(obj);
                response.send(arraySnack);
            }
        });
});
router.get("/arraytable", function (request, response) {
    let db = request.app.locals.db;
    db.collection("sales")
        .find()
        .toArray(function (err, data) {
            if (err != undefined) {
                console.log(err);
                response.send({ message: "error: " + err });
            } else {
                console.log(data);
                let arrayTable = [];
                data.forEach((dataElement) => {
                    let found = false;
                    arrayTable.forEach((arrayElement) => {
                        if (arrayElement.name == dataElement.tableName) {
                            found = true;
                            arrayElement.quantity += parseFloat(
                                dataElement.tableQuantity
                            );
                        }
                    });
                    if (!found && dataElement.tableName != undefined) {
                        arrayTable.push({
                            name: dataElement.tableName,
                            quantity: parseFloat(dataElement.tableQuantity),
                        });
                    }
                });

                let obj = [arrayTable];
                console.log(obj);
                response.send(arrayTable);
            }
        });
});

router.get("/arraycomic", function (request, response) {
    let db = request.app.locals.db;
    db.collection("sales")
        .find()
        .toArray(function (err, data) {
            if (err != undefined) {
                console.log(err);
                response.send({ message: "error: " + err });
            } else {
                console.log(data);
                let arrayComic = [];
                data.forEach((dataElement) => {
                    let found = false;
                    arrayComic.forEach((arrayElement) => {
                        if (arrayElement.name == dataElement.comicName) {
                            found = true;
                            arrayElement.quantity += parseFloat(
                                dataElement.comicQuantity
                            );
                        }
                    });
                    if (!found && dataElement.comicName != undefined) {
                        arrayComic.push({
                            name: dataElement.comicName,
                            quantity: parseFloat(dataElement.comicQuantity),
                        });
                    }
                });

                let obj = [arrayComic];
                console.log(obj);
                response.send(arrayComic);
            }
        });
});

router.get("/arraycards", function (request, response) {
    let db = request.app.locals.db;
    db.collection("sales")
        .find()
        .toArray(function (err, data) {
            if (err != undefined) {
                console.log(err);
                response.send({ message: "error: " + err });
            } else {
                console.log(data);
                let arrayCards = [];
                data.forEach((dataElement) => {
                    let found = false;
                    arrayCards.forEach((arrayElement) => {
                        if (arrayElement.name == dataElement.cardName) {
                            found = true;
                            arrayElement.quantity += parseFloat(
                                dataElement.cardQuantity
                            );
                        }
                    });
                    if (!found && dataElement.cardName != undefined) {
                        arrayCards.push({
                            name: dataElement.cardName,

                            quantity: parseFloat(dataElement.cardQuantity),
                        });
                    }
                });

                let obj = [arrayCards];
                console.log(obj);
                response.send(arrayCards);
            }
        });
});
module.exports = router;
