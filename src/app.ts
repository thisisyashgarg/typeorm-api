import express from "express";
import { config } from "dotenv";
import AppDataSource from "./ormConfig";
config();

const app = express();
const PORT = process.env.PORT;

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`);
    });
    console.log("Connected to postgres");
  })
  .catch((err) => {
    console.error("Error connecting to postgres", err);
  });
