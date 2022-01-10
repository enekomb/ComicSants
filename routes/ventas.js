const express = require("express");
const router = express.Router();

router.get("/", function (request, response) {
    let db = request.app.locals.db;
    db.collection("ventas")
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
    console.log(request.body);
    db.collection("ventas").insertMany(request.body);
    response.send({});
});

router.get("/informe", function (request, response) {
    let db = request.app.locals.db;
    db.collection("ventas")
        .find()
        .toArray(function (err, datos) {
            if (err != undefined) {
                console.log(err);
                response.send({ mensaje: "error: " + err });
            } else {
                console.log(datos);
                let arraySnack = [];
                datos.forEach((datosElemento) => {
                    let finded = false;
                    arraySnack.forEach((arrayElemento) => {
                        if (arrayElemento.nombre == datosElemento.nombreSnac) {
                            finded = true;
                            arrayElemento.cantidad += parseFloat(
                                datosElemento.cantidadSnac
                            );
                        }
                    });
                    if (!finded && datosElemento.nombreSnac != undefined) {
                        arraySnack.push({
                            nombre: datosElemento.nombreSnac,
                            cantidad: parseFloat(datosElemento.cantidadSnac),
                        });
                    }
                });
                //MESAS
                let arrayMesa = [];
                datos.forEach((datosElemento) => {
                    let finded = false;
                    arrayMesa.forEach((arrayElemento) => {
                        if (arrayElemento.nombre == datosElemento.nombreMesa) {
                            finded = true;
                            arrayElemento.cantidad += parseFloat(
                                datosElemento.cantidadMesas
                            );
                        }
                    });
                    if (!finded && datosElemento.nombreMesa != undefined) {
                        arrayMesa.push({
                            nombre: datosElemento.nombreMesa,
                            cantidad: parseFloat(datosElemento.cantidadMesas),
                        });
                    }
                });

                //CARTAS

                let arrayCartas = [];
                datos.forEach((datosElemento) => {
                    let finded = false;
                    arrayCartas.forEach((arrayElemento) => {
                        if (arrayElemento.nombre == datosElemento.nombreCarta) {
                            finded = true;
                            arrayElemento.cantidad += parseFloat(
                                datosElemento.cantidadCartas
                            );
                        }
                    });
                    if (!finded && datosElemento.nombreCarta != undefined) {
                        arrayCartas.push({
                            nombre: datosElemento.nombreCarta,
                            cantidad: parseFloat(datosElemento.cantidadCartas),
                        });
                    }
                });

                //COMICS

                let arrayComic = [];
                datos.forEach((datosElemento) => {
                    let finded = false;
                    arrayComic.forEach((arrayElemento) => {
                        if (arrayElemento.nombre == datosElemento.nombreComic) {
                            finded = true;
                            arrayElemento.cantidad += parseFloat(
                                datosElemento.cantidadComic
                            );
                        }
                    });
                    if (!finded && datosElemento.nombreComic != undefined) {
                        arrayComic.push({
                            nombre: datosElemento.nombreComic,
                            cantidad: parseFloat(datosElemento.cantidadComic),
                        });
                    }
                });
                let obj = [
                    { name: "Snack", array: arraySnack },
                    { name: "Mesa", array: arrayMesa },
                    { name: "Carta", array: arrayCartas },
                    { name: "Comic", array: arrayComic },
                ];
                console.log(arrayComic);
                response.send(obj);
            }
        });
});

router.get("/arraysnac", function (request, response) {
    let db = request.app.locals.db;
    db.collection("ventas")
        .find()
        .toArray(function (err, datos) {
            if (err != undefined) {
                console.log(err);
                response.send({ mensaje: "error: " + err });
            } else {
                console.log(datos);
                let arraySnack = [];
                datos.forEach((datosElemento) => {
                    let finded = false;
                    arraySnack.forEach((arrayElemento) => {
                        if (arrayElemento.nombre == datosElemento.nombreSnac) {
                            finded = true;
                            arrayElemento.cantidad += parseFloat(
                                datosElemento.cantidadSnac
                            );
                        }
                    });
                    if (!finded && datosElemento.nombreSnac != undefined) {
                        arraySnack.push({
                            nombre: datosElemento.nombreSnac,
                            cantidad: parseFloat(datosElemento.cantidadSnac),
                        });
                    }
                });

                let obj = [arraySnack];
                console.log(obj);
                response.send(arraySnack);
            }
        });
});
router.get("/arraymesa", function (request, response) {
    let db = request.app.locals.db;
    db.collection("ventas")
        .find()
        .toArray(function (err, datos) {
            if (err != undefined) {
                console.log(err);
                response.send({ mensaje: "error: " + err });
            } else {
                console.log(datos);
                let arrayMesa = [];
                datos.forEach((datosElemento) => {
                    let finded = false;
                    arrayMesa.forEach((arrayElemento) => {
                        if (arrayElemento.nombre == datosElemento.nombreMesa) {
                            finded = true;
                            arrayElemento.cantidad += parseFloat(
                                datosElemento.cantidadMesas
                            );
                        }
                    });
                    if (!finded && datosElemento.nombreMesa != undefined) {
                        arrayMesa.push({
                            nombre: datosElemento.nombreMesa,
                            cantidad: parseFloat(datosElemento.cantidadMesas),
                        });
                    }
                });

                let obj = [arrayMesa];
                console.log(obj);
                response.send(arrayMesa);
            }
        });
});

router.get("/arraycomic", function (request, response) {
    let db = request.app.locals.db;
    db.collection("ventas")
        .find()
        .toArray(function (err, datos) {
            if (err != undefined) {
                console.log(err);
                response.send({ mensaje: "error: " + err });
            } else {
                console.log(datos);
                let arrayComic = [];
                datos.forEach((datosElemento) => {
                    let finded = false;
                    arrayComic.forEach((arrayElemento) => {
                        if (arrayElemento.nombre == datosElemento.nombreComic) {
                            finded = true;
                            arrayElemento.cantidad += parseFloat(
                                datosElemento.cantidadComic
                            );
                        }
                    });
                    if (!finded && datosElemento.nombreComic != undefined) {
                        arrayComic.push({
                            nombre: datosElemento.nombreComic,
                            cantidad: parseFloat(datosElemento.cantidadComic),
                        });
                    }
                });

                let obj = [arrayComic];
                console.log(obj);
                response.send(arrayComic);
            }
        });
});

router.get("/arraycartas", function (request, response) {
    let db = request.app.locals.db;
    db.collection("ventas")
        .find()
        .toArray(function (err, datos) {
            if (err != undefined) {
                console.log(err);
                response.send({ mensaje: "error: " + err });
            } else {
                console.log(datos);
                let arrayCartas = [];
                datos.forEach((datosElemento) => {
                    let finded = false;
                    arrayCartas.forEach((arrayElemento) => {
                        if (arrayElemento.nombre == datosElemento.nombreCarta) {
                            finded = true;
                            arrayElemento.cantidad += parseFloat(
                                datosElemento.cantidadCartas
                            );
                        }
                    });
                    if (!finded && datosElemento.nombreCarta != undefined) {
                        arrayCartas.push({
                            nombre: datosElemento.nombreCarta,

                            cantidad: parseFloat(datosElemento.cantidadCartas),
                        });
                    }
                });

                let obj = [arrayCartas];
                console.log(obj);
                response.send(arrayCartas);
            }
        });
});
module.exports = router;
