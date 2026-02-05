const express = require("express");
const router = express.Router();

// router.post("/", function (request, response) {
//     let db = request.app.locals.db;
//     db.collection("admin")
//         .find()
//         .toArray(function (err, data) {
//             if (err != undefined) {
//                 console.log(err);
//                 alert("Incorrect user or password. Please try again.");
//                 response.send({ message: "error: " + err });
//             } else {
//                 // console.log("everything correct");
//                 response.send({msg: "everything correct"});
//                 // window.location.href = "http://localhost:3000/home/home.html";
//             }
//         });
// });

router.post("/", function (request, response) {
    let db = request.app.locals.db;
    let username = request.body.user;
    let userPassword = request.body.password;

    db.collection("admin")
        .find({user: username})
        .toArray(function (err, userArray) {
            if (err != undefined) {
                // console.log(err);
                response.send({ message: "error: " + err });
               
            } else {
                if (userArray.length > 0) {
                    if (userPassword == userArray[0].password) {
                        response.send({ message: "Logged in successfully" });
                
                    } else {
                        response.send({ message: "Incorrect password" });
                    }
                } else {
                    response.send({ message: "User does not exist" });
                }
                // if()
                // console.log("everything correct");
                // response.send({msg: "everything correct"});
                // // window.location.href = "http://localhost:3000/home/home.html";
            }
        });
});

module.exports = router;
