const express = require("express");
const router = express.Router();

// GET all clients
router.get("/", function (request, response) {
    try {
        const db = request.app.locals.db;
        const stmt = db.prepare('SELECT * FROM clients');
        const data = stmt.all();
        response.send(data);
    } catch (err) {
        console.error(err);
        response.status(500).send({ message: "Error: " + err.message });
    }
});

// POST - Create a new client
router.post("/", function (request, response) {
    try {
        const db = request.app.locals.db;
        const stmt = db.prepare(`
            INSERT INTO clients (dni, name, surname, postal_code, address, email, phone)
            VALUES (@dni, @name, @surname, @postalCode, @address, @email, @phone)
        `);
        stmt.run(request.body);
        response.send({ success: true });
    } catch (err) {
        console.error(err);
        response.status(500).send({ message: "Error: " + err.message });
    }
});

// PUT - Update a client
router.put("/", function (request, response) {
    try {
        const db = request.app.locals.db;
        const stmt = db.prepare(`
            UPDATE clients 
            SET name = @name,
                surname = @surname,
                postal_code = @postalCode,
                address = @address,
                email = @email,
                phone = @phone
            WHERE dni = @dni
        `);
        stmt.run(request.body);
        response.send({ success: true });
    } catch (err) {
        console.error(err);
        response.status(500).send({ message: "Error: " + err.message });
    }
});

// DELETE - Remove a client
router.delete("/", function (request, response) {
    try {
        const db = request.app.locals.db;
        const stmt = db.prepare('DELETE FROM clients WHERE dni = ?');
        stmt.run(request.body.dni);
        response.send({ success: true });
    } catch (err) {
        console.error(err);
        response.status(500).send({ message: "Error: " + err.message });
    }
});

module.exports = router;

