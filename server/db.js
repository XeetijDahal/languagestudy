const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgresql://languagestudying_user:JUIQcJXm4owCy5UIppNzIT8B7GNqInC9@dpg-d2lgihje5dus738q2u50-a.oregon-postgres.render.com/languagestudying", // put in quotes, remove comma
  ssl: { rejectUnauthorized: false }
});

module.exports = pool;
