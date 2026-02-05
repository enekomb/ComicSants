const express = require("express");
const router = express.Router();

// GET all snacks
router.get("/", function (request, response) {
    try {
        const db = request.app.locals.db;
        const stmt = db.prepare('SELECT * FROM snacks');
        const data = stmt.all();
        response.send(data);
    } catch (err) {
        console.error(err);
        response.status(500).send({ message: "Error: " + err.message });
    }
});

// POST - Create a new snack
router.post("/", function (request, response) {
    try {
        const db = request.app.locals.db;
        const stmt = db.prepare(`
            INSERT INTO snacks (name, price, copies, genre, img)
            VALUES (@name, @price, @copies, @genre, @img)
        `);
        stmt.run(request.body);
        response.send({ success: true });
    } catch (err) {
        console.error(err);
        response.status(500).send({ message: "Error: " + err.message });
    }
});

// PUT - Update a snack
router.put("/", function (request, response) {
    try {
        const db = request.app.locals.db;
        const stmt = db.prepare(`
            UPDATE snacks 
            SET price = @price,
                copies = @copies,
                genre = @genre,
                img = @img
            WHERE name = @name
        `);
        stmt.run(request.body);
        response.send({ success: true });
    } catch (err) {
        console.error(err);
        response.status(500).send({ message: "Error: " + err.message });
    }
});

// DELETE - Remove a snack
router.delete("/", function (request, response) {
    try {
        const db = request.app.locals.db;
        const stmt = db.prepare('DELETE FROM snacks WHERE name = ?');
        stmt.run(request.body.name);
        response.send({ success: true });
    } catch (err) {
        console.error(err);
        response.status(500).send({ message: "Error: " + err.message });
    }
});

module.exports = router;

