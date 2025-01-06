import app from "./app";
import { createConnection } from "typeorm";
import { config } from "./config";
import { AppDataSource } from "./config/typeorm/data-source";

async function startServer() {
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized!");
    app.listen(config.port, () => {
      console.log(`Server is running on http://localhost:${config.port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
}

startServer();
