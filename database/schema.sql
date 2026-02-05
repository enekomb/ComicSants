-- ComicSants Database Schema for SQLite

-- Admins table
CREATE TABLE IF NOT EXISTS admins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Clients table
CREATE TABLE IF NOT EXISTS clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    dni TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    surname TEXT NOT NULL,
    postal_code TEXT,
    address TEXT,
    email TEXT,
    phone TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Comics table
CREATE TABLE IF NOT EXISTS comics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    isbn TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    author TEXT,
    publisher TEXT,
    price REAL NOT NULL,
    pages INTEGER,
    copies INTEGER DEFAULT 0,
    genre TEXT,
    img TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Snacks table
CREATE TABLE IF NOT EXISTS snacks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    price REAL NOT NULL,
    copies INTEGER DEFAULT 0,
    genre TEXT,
    img TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Cards (Trading Cards) table
CREATE TABLE IF NOT EXISTS cards (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ean TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    copies INTEGER DEFAULT 0,
    genre TEXT,
    img TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tables (Board Games) table
CREATE TABLE IF NOT EXISTS tables (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ean TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    copies INTEGER DEFAULT 0,
    genre TEXT,
    img TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Sales table
CREATE TABLE IF NOT EXISTS sales (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_id INTEGER,
    sale_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    -- Snack sale fields (nullable)
    snack_name TEXT,
    snack_quantity INTEGER,
    snack_price REAL,
    
    -- Comic sale fields (nullable)
    comic_name TEXT,
    comic_quantity INTEGER,
    comic_price REAL,
    
    -- Card sale fields (nullable)
    card_name TEXT,
    card_quantity INTEGER,
    card_price REAL,
    
    -- Table (Board Game) sale fields (nullable)
    table_name TEXT,
    table_quantity INTEGER,
    table_price REAL,
    
    total_price REAL,
    
    FOREIGN KEY (client_id) REFERENCES clients(id)
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_sales_date ON sales(sale_date);
CREATE INDEX IF NOT EXISTS idx_sales_client ON sales(client_id);
CREATE INDEX IF NOT EXISTS idx_comics_isbn ON comics(isbn);
CREATE INDEX IF NOT EXISTS idx_clients_dni ON clients(dni);
CREATE INDEX IF NOT EXISTS idx_cards_ean ON cards(ean);
CREATE INDEX IF NOT EXISTS idx_tables_ean ON tables(ean);
