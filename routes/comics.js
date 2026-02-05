const express = require("express");
const router = express.Router();

// GET all comics
router.get("/", function (request, response) {
    try {
        const db = request.app.locals.db;
        const stmt = db.prepare('SELECT * FROM comics');
        const data = stmt.all();
        response.send(data);
    } catch (err) {
        console.error(err);
        response.status(500).send({ message: "Error: " + err.message });
    }
});

// POST - Create a new comic
router.post("/", function (request, response) {
    try {
        const db = request.app.locals.db;
        const stmt = db.prepare(`
            INSERT INTO comics (isbn, name, author, publisher, price, pages, copies, genre, img)
            VALUES (@isbn, @name, @author, @publisher, @price, @pages, @copies, @genre, @img)
        `);
        stmt.run(request.body);
        response.send({ success: true });
    } catch (err) {
        console.error(err);
        response.status(500).send({ message: "Error: " + err.message });
    }
});

// PUT - Update a comic
router.put("/", function (request, response) {
    try {
        const db = request.app.locals.db;
        const stmt = db.prepare(`
            UPDATE comics 
            SET name = @name,
                author = @author,
                publisher = @publisher,
                price = @price,
                pages = @pages,
                copies = @copies,
                genre = @genre,
                img = @img
            WHERE isbn = @isbn
        `);
        stmt.run(request.body);
        response.send({ success: true });
    } catch (err) {
        console.error(err);
        response.status(500).send({ message: "Error: " + err.message });
    }
});

// DELETE - Remove a comic
router.delete("/", function (request, response) {
    try {
        const db = request.app.locals.db;
        const stmt = db.prepare('DELETE FROM comics WHERE isbn = ?');
        stmt.run(request.body.isbn);
        response.send({ success: true });
    } catch (err) {
        console.error(err);
        response.status(500).send({ message: "Error: " + err.message });
    }
});

module.exports = router;

