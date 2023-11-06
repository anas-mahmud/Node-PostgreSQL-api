require("dotenv").config();
const pool = require("./db");
const app = require("./app");
const port = process.env.PORT || 5000;

async function main() {
   try {
      await pool.connect();
      console.log(`🛢️ database connection successfully`);

      app.listen(port, () => {
         console.log(`server listening on port ${port}`);
      });
   } catch (error) {
      console.log(`Failed to connect database`, error);
   }
}
main();
