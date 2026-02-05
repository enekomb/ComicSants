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
        console.error("Error fetching snacks:", err);
        response.status(500).send({ message: "Error: " + err.message });
    }
});

// POST - Create a new snack
router.post("/", function (request, response) {
    try {
        const db = request.app.locals.db;
        
        // Map 'category' from frontend to 'genre' for database
        const snackData = {
            name: request.body.name,
            price: request.body.price,
            copies: request.body.copies,
            genre: request.body.category ?? request.body.genre, // Support both 'category' and 'genre'
            img: request.body.img
        };
        
        const stmt = db.prepare(`
            INSERT INTO snacks (name, price, copies, genre, img)
            VALUES (@name, @price, @copies, @genre, @img)
        `);
        stmt.run(snackData);
        response.send({ success: true });
    } catch (err) {
        console.error("Error creating snack:", err);
        console.error("Snack data:", { name: request.body.name, category: request.body.category, genre: request.body.genre });
        response.status(500).send({ message: "Error: " + err.message });
    }
});

// PUT - Update a snack
// Note: Uses 'name' as the unique identifier (consistent with original MongoDB implementation)
// Design limitation: Since we use 'name' in the WHERE clause, you cannot rename a snack
// To rename a snack, you would need to delete and recreate it, or use 'id' as the identifier instead
router.put("/", function (request, response) {
    try {
        const db = request.app.locals.db;
        
        // Map 'category' from frontend to 'genre' for database
        const snackData = {
            name: request.body.name,
            price: request.body.price,
            copies: request.body.copies,
            genre: request.body.category ?? request.body.genre, // Support both 'category' and 'genre'
            img: request.body.img
        };
        
        const stmt = db.prepare(`
            UPDATE snacks 
            SET price = @price,
                copies = @copies,
                genre = @genre,
                img = @img
            WHERE name = @name
        `);
        stmt.run(snackData);
        response.send({ success: true });
    } catch (err) {
        console.error("Error updating snack:", err);
        console.error("Snack data:", { name: request.body.name, category: request.body.category, genre: request.body.genre });
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
        console.error("Error deleting snack:", err);
        console.error("Snack name:", request.body.name);
        response.status(500).send({ message: "Error: " + err.message });
    }
});

module.exports = router;

