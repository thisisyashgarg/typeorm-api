import express from "express";
import { config } from "dotenv";
config({ path: __dirname + "/.env" });

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Server started at http://localhost:${process.env.PORT}`);
});
