import { DATABASE } from "./constants";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  DATABASE.DB_NAME,
  DATABASE.DB_USERNAME,
  DATABASE.DB_PASSWORD,
  {
    host: DATABASE.DB_URL,
    dialect: DATABASE.DB_DIALECT,
  }
);
sequelize.sync({ force: false });
