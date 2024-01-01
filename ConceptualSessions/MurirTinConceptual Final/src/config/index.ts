import dotenv from "dotenv";
import path from "path";
dotenv.config({
  path: path.join(process.cwd(), ".env")
});
export default {
  port: process.env.PORT,
  database_url_cloud: process.env.DATABASE_URL_Cloud
};
