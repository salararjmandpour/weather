import { config as loadEnv } from "dotenv";

loadEnv();

export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 3000,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_NAME: process.env.DB_NAME,
  OPEN_WEATHER_API_KEY: process.env.OPEN_WEATHER_API_KEY,
};
