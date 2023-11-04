require("dotenv").config();
const app = require("./app");
const port = process.env.PORT || 8080;

async function main() {
   try {

      app.listen(port, () => {
         console.log(`server listening on port ${port}`);
      });
   } catch (error) {
      console.log(`Failed to connect database`, error);
   }
}

main();