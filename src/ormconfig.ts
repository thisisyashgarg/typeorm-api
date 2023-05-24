import { DataSource } from "typeorm";
import { Client } from "./entities/Client";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATA_SOURCE_HOST,
  port: Number(process.env.DATA_SOURCE_PORT),
  username: process.env.DATA_SOURCE_USERNAME,
  password: undefined,
  database: process.env.DATA_SOURCE_DATABASE,
  entities: [Client],
  synchronize: true,
});

export default AppDataSource;
