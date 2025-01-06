import { Router } from "express";
import { WeatherController } from "../controllers/weather.controller";

const router = Router();

router.get("/weather", WeatherController.getWeather);
router.get("/weather/:id", WeatherController.getWeatherById);
router.get(
  "/weather/latest/:cityName",
  WeatherController.getLatestWeatherByCityName
);
router.post("/weather", WeatherController.fetchWeather);
router.put("/weather/:id", WeatherController.updateWeather);
router.delete("/weather/:id", WeatherController.deleteWeather);

export default router;
