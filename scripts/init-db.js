#!/usr/bin/env node
/**
 * Database Initialization Script
 * Creates an admin user for first-time setup
 */

const { getDatabase } = require('../database/connection');

console.log('🔧 ComicSants Database Initialization\n');

// Get database instance
const db = getDatabase();

// Check if admin users already exist
const checkStmt = db.prepare('SELECT COUNT(*) as count FROM admins');
const result = checkStmt.get();

if (result.count > 0) {
    console.log('⚠️  Admin users already exist in the database.');
    console.log('   Current admin count:', result.count);
    console.log('\nIf you need to reset, delete database/comicsants.db and run this script again.\n');
    process.exit(0);
}

// Create default admin user
const insertStmt = db.prepare(`
    INSERT INTO admins (username, password)
    VALUES (?, ?)
`);

try {
    insertStmt.run('admin', 'admin123');
    
    console.log('✅ Successfully created default admin user!\n');
    console.log('Login credentials:');
    console.log('   Username: admin');
    console.log('   Password: admin123\n');
    console.log('⚠️  IMPORTANT: Change this password after your first login!\n');
    console.log('You can now start the server with: npm start\n');
} catch (error) {
    console.error('❌ Error creating admin user:', error.message);
    process.exit(1);
}
