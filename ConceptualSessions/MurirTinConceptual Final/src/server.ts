import app from "./app";
import config from "./config";
import mongoose from "mongoose";

async function server() {
  try {
    await mongoose.connect(config.database_url_cloud);

    const Cat = mongoose.model("Cat");

    const kitty = new Cat({ name: "Zildjian" });
    kitty.save().then(() => console.log("meow"));

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
server().catch((err) => console.log(err));
