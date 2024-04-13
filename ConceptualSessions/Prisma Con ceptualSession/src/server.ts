import { Server } from "http";
import app from ".";

const port: number = 3000;
let server: Server;
function main() {
  try {
    server = app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
