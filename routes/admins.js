const express = require("express");
const router = express.Router();

// router.post("/", function (request, response) {
//     let db = request.app.locals.db;
//     db.collection("admin")
//         .find()
//         .toArray(function (err, datos) {
//             if (err != undefined) {
//                 console.log(err);
//                 alert("Usuario o Contraseña erronea. Vuelva a intentarlo.");
//                 response.send({ mensaje: "error: " + err });
//             } else {
//                 // console.log("todo correcto");
//                 response.send({msg: "todo correcto"});
//                 // window.location.href = "http://localhost:3000/home/home.html";
//             }
//         });
// });

router.post("/", function (request, response) {
    let db = request.app.locals.db;
    let nombreUsuario = request.body.usuario;
    let contraseñaUsuario = request.body.contraseña;

    db.collection("admin")
        .find({usuario: nombreUsuario})
        .toArray(function (err, arrayUsuario) {
            if (err != undefined) {
                // console.log(err);
                response.send({ mensaje: "error: " + err });
               
            } else {
                if (arrayUsuario.length > 0) {
                    if (contraseñaUsuario == arrayUsuario[0].contraseña) {
                        response.send({ mensaje: "Logueado correctamente" });
                
                    } else {
                        response.send({ mensaje: "Contraseña incorrecta" });
                    }
                } else {
                    response.send({ mensaje: "El usuario no existe" });
                }
                // if()
                // console.log("todo correcto");
                // response.send({msg: "todo correcto"});
                // // window.location.href = "http://localhost:3000/home/home.html";
            }
        });
});

module.exports = router;
