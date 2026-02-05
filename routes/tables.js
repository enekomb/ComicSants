const express = require("express");
const router = express.Router();

// GET all tables (board games)
router.get("/", function (request, response) {
    try {
        const db = request.app.locals.db;
        const stmt = db.prepare('SELECT * FROM tables');
        const data = stmt.all();
        response.send(data);
    } catch (err) {
        console.error(err);
        response.status(500).send({ message: "Error: " + err.message });
    }
});

// POST - Create a new table (board game)
router.post("/", function (request, response) {
    try {
        const db = request.app.locals.db;
        const stmt = db.prepare(`
            INSERT INTO tables (ean, name, price, copies, genre, img)
            VALUES (@ean, @name, @price, @copies, @genre, @img)
        `);
        stmt.run(request.body);
        response.send({ success: true });
    } catch (err) {
        console.error(err);
        response.status(500).send({ message: "Error: " + err.message });
    }
});

// PUT - Update a table (board game)
router.put("/", function (request, response) {
    try {
        const db = request.app.locals.db;
        const stmt = db.prepare(`
            UPDATE tables 
            SET name = @name,
                price = @price,
                copies = @copies,
                genre = @genre,
                img = @img
            WHERE ean = @ean
        `);
        stmt.run(request.body);
        response.send({ success: true });
    } catch (err) {
        console.error(err);
        response.status(500).send({ message: "Error: " + err.message });
    }
});

// DELETE - Remove a table (board game)
router.delete("/", function (request, response) {
    try {
        const db = request.app.locals.db;
        const stmt = db.prepare('DELETE FROM tables WHERE ean = ?');
        stmt.run(request.body.ean);
        response.send({ success: true });
    } catch (err) {
        console.error(err);
        response.status(500).send({ message: "Error: " + err.message });
    }
});

module.exports = router;

