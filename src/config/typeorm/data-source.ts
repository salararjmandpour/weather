import { DataSource } from "typeorm";
import { config } from "../../config";
import { Weather } from "../../entities/weather.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: config.database.host,
  port: config.database.port,
  username: config.database.username,
  password: config.database.password,
  database: config.database.database,
  synchronize: false,
  logging: true,
  entities: [Weather],
  migrations: ["./src/migrations/**/*.ts"],
});
