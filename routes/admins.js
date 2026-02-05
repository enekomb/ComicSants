const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

// POST - Admin login
router.post("/", function (request, response) {
    try {
        const db = request.app.locals.db;
        const username = request.body.user;
        const userPassword = request.body.password;

        const stmt = db.prepare('SELECT * FROM admins WHERE username = ?');
        const userArray = stmt.all(username);

        if (userArray.length > 0) {
            // Use bcrypt to compare passwords
            const isPasswordValid = bcrypt.compareSync(userPassword, userArray[0].password);
            
            if (isPasswordValid) {
                response.send({ message: "Logged in successfully" });
            } else {
                response.send({ message: "Incorrect password" });
            }
        } else {
            response.send({ message: "User does not exist" });
        }
    } catch (err) {
        console.error(err);
        response.status(500).send({ message: "Error: " + err.message });
    }
});

module.exports = router;

