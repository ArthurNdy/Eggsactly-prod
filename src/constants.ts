// const isProd = true; // prod or preprod
// const isAppEngine = false; // local or AppEngine on Google Cloud
import * as dotenv from "dotenv";

dotenv.config();

const DB_CONFIG = {
  database_name: process.env.DB_NAME as string,
  username: process.env.DB_USERNAME as string,
  password: process.env.PASSWORD as string,
  host: process.env.HOST as string,
};

export default DB_CONFIG;
