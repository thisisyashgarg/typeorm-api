import express from "express";
import { config } from "dotenv";
import AppDataSource from "./ormConfig";
import { ClientRouter } from "./routes/client.route";
config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.use("/api", ClientRouter);

AppDataSource.initialize()
  .then(() => {
    console.log("Connected to postgres");
    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to postgres", err);
  });
