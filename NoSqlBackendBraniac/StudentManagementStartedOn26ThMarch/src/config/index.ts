import dotenv from "dotenv";
import path from "path";
dotenv.config({
  path: path.join(process.cwd(), ".env")
});

export default {
  port: process.env.PORT,
  database_cloud: process.env.DB_URL_CLOUD
};
