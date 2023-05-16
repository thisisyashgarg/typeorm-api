import express from "express";
import { config } from "dotenv";
import myDataSource from "./ormconfig";
config();

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

// myDataSource
//   .initialize()
//   .then(() => {
//     console.log("Connected to database");
//     app.listen(PORT, () => {
//       console.log(`Server started at http://localhost:${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log("TypeORM connection error: ", error);
//   });
