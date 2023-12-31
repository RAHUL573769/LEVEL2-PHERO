import app from "./app";
import config from "./config";

const port = 3000;
app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
});
