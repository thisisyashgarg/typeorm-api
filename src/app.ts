import express from "express";
import { config } from "dotenv";
import AppDataSource from "./ormconfig";

config();

const app = express();
const PORT = process.env.PORT;

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`);
    });
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
