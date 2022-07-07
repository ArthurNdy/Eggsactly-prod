import { Sequelize } from "sequelize";
import db_params from "../constants";

//declare database credentials
export const sequelize = new Sequelize(
  db_params.database_name,
  db_params.username,
  db_params.password,
  {
    host: db_params.host,
    dialect: "postgres",
  }
);

// IIFE
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
