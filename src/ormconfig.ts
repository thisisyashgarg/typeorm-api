import { DataSource } from "typeorm";
import { Client } from "./entities/Client";
import { Banker } from "./entities/Banker";
import { Transaction } from "./entities/Transaction";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATA_SOURCE_HOST,
  port: Number(process.env.DATA_SOURCE_PORT),
  username: process.env.DATA_SOURCE_USERNAME,
  password: undefined,
  database: process.env.DATA_SOURCE_DATABASE,
  entities: [Client, Banker, Transaction],
  synchronize: true,
});

export default AppDataSource;
