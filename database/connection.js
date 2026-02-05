const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

// Database file path
const DB_PATH = path.join(__dirname, 'comicsants.db');
const SCHEMA_PATH = path.join(__dirname, 'schema.sql');

/**
 * Initialize the SQLite database
 * @returns {Database} Database instance
 */
function initializeDatabase() {
    // Create or open database
    const db = new Database(DB_PATH, { verbose: console.log });
    
    // Enable foreign keys
    db.pragma('foreign_keys = ON');
    
    // Read and execute schema
    const schema = fs.readFileSync(SCHEMA_PATH, 'utf-8');
    db.exec(schema);
    
    console.log('Database initialized successfully');
    
    return db;
}

/**
 * Get database instance
 * @returns {Database} Database instance
 */
function getDatabase() {
    if (!fs.existsSync(DB_PATH)) {
        return initializeDatabase();
    }
    
    const db = new Database(DB_PATH, { verbose: console.log });
    db.pragma('foreign_keys = ON');
    
    return db;
}

module.exports = {
    initializeDatabase,
    getDatabase
};
