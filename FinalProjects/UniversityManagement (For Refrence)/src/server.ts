import app from "./app";
import config from "./config";

async function server() {
  try {
    const mongoose = require("mongoose");
    mongoose.connect(config.database_cloud);

    app.listen(config.port, () => {
      console.log(
        `Example app listening on port ${config.port}  and Connected to Database`
      );
    });
  } catch (error) {
    console.log(error);
  }
}

server().catch((err) => console.log(err));
