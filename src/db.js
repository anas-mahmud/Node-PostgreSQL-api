require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
   host: "localhost",
   port: 5432,
   database: process.env.SQL_DATABASE,
   user: process.env.DATABASE_USER,
   password: process.env.DATABASE_USER_PASS
})

module.exports = pool;