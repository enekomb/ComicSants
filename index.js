const express = require("express");
const { getDatabase } = require("./database/connection");

// Import routes
let cards = require("./routes/cards");
let clients = require("./routes/clients");
let tables = require("./routes/tables");
let snacks = require("./routes/snacks");
let products = require("./routes/products");
let comics = require("./routes/comics");
let sales = require("./routes/sales");
let admins = require("./routes/admins");

// Initialize Express app
let app = express();

// Initialize SQLite database
try {
    const db = getDatabase();
    app.locals.db = db;
    console.log("SQLite database connected successfully");
} catch (err) {
    console.error("Failed to connect to database:", err);
    process.exit(1);
}

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Static files
app.use("/", express.static("public"));

// API Routes
app.use("/admins/admin", admins);
app.use("/clients/client", clients);
app.use("/cards/card", cards);
app.use("/tables/table", tables);
app.use("/snacks/snack", snacks);
app.use("/products/product", products);
app.use("/comics/comic", comics);
app.use("/sales/sale", sales);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
