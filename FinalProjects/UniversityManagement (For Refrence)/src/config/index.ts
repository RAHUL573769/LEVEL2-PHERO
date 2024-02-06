import dotenv from "dotenv";
import path from "path";
dotenv.config({
  path: path.join(process.cwd(), ".env")
});

export default {
  port: process.env.PORT,
  database_local: process.env.DATABASE_LOCAL,
  database_cloud: process.env.DATABASE_URL_CLOUD
};
