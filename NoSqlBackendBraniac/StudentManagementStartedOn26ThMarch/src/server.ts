import app from "./app";
import config from "./config";
import mongoose from "mongoose";

const port = config.port;

async function main() {
  try {
    mongoose.connect(config.database_cloud as string);

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
