import { sequelize } from "../config/db-setup";

export async function get_daily(id = 0) {
  let QUERY;
  console.log(id);
  if (isNaN(id)) {
    QUERY = `SELECT * FROM recipes`;
  } else {
    QUERY = `SELECT * FROM recipes WHERE id = ${id}`;
  }
  const res = await sequelize.query(QUERY);
  return res;
}
