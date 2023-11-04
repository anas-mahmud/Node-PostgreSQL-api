require("dotenv").config();
const { Pool } = require('pg');
const app = require("./app");
const port = process.env.PORT || 5000;

const pool = new Pool({
   host: "localhost",
   port: 5432,
   database: process.env.SQL_DATABASE,
   user: process.env.DATABASE_USER,
   password: process.env.DATABASE_USER_PASS
})

async function main() {
   try {
      await pool.connect();
      console.log(`🛢️  database connection successfully`);

      app.listen(port, () => {
         console.log(`server listening on port ${port}`);
      });
   } catch (error) {
      console.log(`Failed to connect database`, error);
   }
}
main();

module.exports = pool;