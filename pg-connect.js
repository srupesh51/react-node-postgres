const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgresql://devsql:password@123@localhost:5432/products';

const client = new pg.Client(connectionString);
module.exports = client;
