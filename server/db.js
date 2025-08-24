const { Pool } = require("pg");  // ✅ make sure to import Pool

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // use Render DB URL
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;
