const express = require("express");
const router = express.Router();

// GET all sales
router.get("/", function (request, response) {
    try {
        const db = request.app.locals.db;
        const stmt = db.prepare('SELECT * FROM sales ORDER BY sale_date DESC');
        const data = stmt.all();
        response.send(data);
    } catch (err) {
        console.error(err);
        response.status(500).send({ message: "Error: " + err.message });
    }
});

// POST - Create new sales (can be multiple)
router.post("/", function (request, response) {
    try {
        const db = request.app.locals.db;
        console.log(request.body);
        
        const stmt = db.prepare(`
            INSERT INTO sales (
                client_id, snack_name, snack_quantity, snack_price,
                comic_name, comic_quantity, comic_price,
                card_name, card_quantity, card_price,
                table_name, table_quantity, table_price,
                total_price
            ) VALUES (
                ?, ?, ?, ?,
                ?, ?, ?,
                ?, ?, ?,
                ?, ?, ?,
                ?
            )
        `);
        
        // Handle both single sale and multiple sales (array)
        const sales = Array.isArray(request.body) ? request.body : [request.body];
        
        const insertMany = db.transaction((salesArray) => {
            for (const sale of salesArray) {
                stmt.run(
                    sale.client_id || null,
                    sale.snackName || null,
                    sale.snackQuantity || null,
                    sale.snackPrice || null,
                    sale.comicName || null,
                    sale.comicQuantity || null,
                    sale.comicPrice || null,
                    sale.cardName || null,
                    sale.cardQuantity || null,
                    sale.cardPrice || null,
                    sale.tableName || null,
                    sale.tableQuantity || null,
                    sale.tablePrice || null,
                    sale.total_price || 0
                );
            }
        });
        
        insertMany(sales);
        response.send({ success: true });
    } catch (err) {
        console.error(err);
        response.status(500).send({ message: "Error: " + err.message });
    }
});

// GET sales report - Aggregated data for all product categories
router.get("/report", function (request, response) {
    try {
        const db = request.app.locals.db;
        
        // Aggregate snacks
        const snackStmt = db.prepare(`
            SELECT snack_name as name, SUM(snack_quantity) as quantity
            FROM sales
            WHERE snack_name IS NOT NULL
            GROUP BY snack_name
        `);
        const arraySnack = snackStmt.all();
        
        // Aggregate tables (board games)
        const tableStmt = db.prepare(`
            SELECT table_name as name, SUM(table_quantity) as quantity
            FROM sales
            WHERE table_name IS NOT NULL
            GROUP BY table_name
        `);
        const arrayTable = tableStmt.all();
        
        // Aggregate cards
        const cardStmt = db.prepare(`
            SELECT card_name as name, SUM(card_quantity) as quantity
            FROM sales
            WHERE card_name IS NOT NULL
            GROUP BY card_name
        `);
        const arrayCards = cardStmt.all();
        
        // Aggregate comics
        const comicStmt = db.prepare(`
            SELECT comic_name as name, SUM(comic_quantity) as quantity
            FROM sales
            WHERE comic_name IS NOT NULL
            GROUP BY comic_name
        `);
        const arrayComic = comicStmt.all();
        
        const result = [
            { name: "Snack", array: arraySnack },
            { name: "Table", array: arrayTable },
            { name: "Card", array: arrayCards },
            { name: "Comic", array: arrayComic }
        ];
        
        response.send(result);
    } catch (err) {
        console.error(err);
        response.status(500).send({ message: "Error: " + err.message });
    }
});

// GET aggregated snack sales
router.get("/arraysnack", function (request, response) {
    try {
        const db = request.app.locals.db;
        const stmt = db.prepare(`
            SELECT snack_name as name, SUM(snack_quantity) as quantity
            FROM sales
            WHERE snack_name IS NOT NULL
            GROUP BY snack_name
        `);
        const arraySnack = stmt.all();
        response.send(arraySnack);
    } catch (err) {
        console.error(err);
        response.status(500).send({ message: "Error: " + err.message });
    }
});

// GET aggregated table (board game) sales
router.get("/arraytable", function (request, response) {
    try {
        const db = request.app.locals.db;
        const stmt = db.prepare(`
            SELECT table_name as name, SUM(table_quantity) as quantity
            FROM sales
            WHERE table_name IS NOT NULL
            GROUP BY table_name
        `);
        const arrayTable = stmt.all();
        response.send(arrayTable);
    } catch (err) {
        console.error(err);
        response.status(500).send({ message: "Error: " + err.message });
    }
});

// GET aggregated comic sales
router.get("/arraycomic", function (request, response) {
    try {
        const db = request.app.locals.db;
        const stmt = db.prepare(`
            SELECT comic_name as name, SUM(comic_quantity) as quantity
            FROM sales
            WHERE comic_name IS NOT NULL
            GROUP BY comic_name
        `);
        const arrayComic = stmt.all();
        response.send(arrayComic);
    } catch (err) {
        console.error(err);
        response.status(500).send({ message: "Error: " + err.message });
    }
});

// GET aggregated card sales
router.get("/arraycards", function (request, response) {
    try {
        const db = request.app.locals.db;
        const stmt = db.prepare(`
            SELECT card_name as name, SUM(card_quantity) as quantity
            FROM sales
            WHERE card_name IS NOT NULL
            GROUP BY card_name
        `);
        const arrayCards = stmt.all();
        response.send(arrayCards);
    } catch (err) {
        console.error(err);
        response.status(500).send({ message: "Error: " + err.message });
    }
});

module.exports = router;
