import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(process.cwd(), ".env")
});

export default {
  port: process.env.PORT1,
  database_url_local: process.env.DATABASE_URL_LOCAL,
  database_url: process.env.DATABASE_URL,
  node_env: process.env.NODE_ENV
};
