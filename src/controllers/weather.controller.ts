import { Request, Response } from "express";
import { WeatherService } from "../services/weather.service";

const weatherService = new WeatherService();

export class WeatherController {
  static async getWeather(req: Request, res: Response): Promise<any> {
    try {
      const weatherData = await weatherService.getAllWeather();
      if (!weatherData)
        return res.status(404).json({ message: "Weather data not found" });
      res.status(200).json(weatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return res.status(500).json({ message: "Internal server error", error });
    }
  }
  //-------------------------------------------------------------------------------------------------------
  static async getWeatherById(req: Request, res: Response): Promise<any> {
    const { id } = req.params;

    try {
      const weatherData = await weatherService.getWeatherById(Number(id));
      if (!weatherData)
        return res.status(404).json({ message: "Weather data not found" });
      res.status(200).json(weatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return res.status(500).json({ message: "Internal server error", error });
    }
  }
  //-------------------------------------------------------------------------------------------------------
  static async fetchWeather(req: Request, res: Response): Promise<any> {
    const { cityName, country } = req.body;
    try {
      const weatherData = await weatherService.fetchAndSaveWeather(
        cityName,
        country
      );
      return res.status(200).json(weatherData);
    } catch (error) {
      console.error("Error fetching and saving weather data:", error);
      return res
        .status(500)
        .json({ message: "Failed to fetch weather data", error });
    }
  }
  //-------------------------------------------------------------------------------------------------------
  static async updateWeather(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const updateData = req.body;

    try {
      const updatedWeather = await weatherService.updateWeather(
        Number(id),
        updateData
      );
      return res.status(200).json(updatedWeather);
    } catch (error) {
      console.error("Error updating weather record:", error);
      return res
        .status(404)
        .json({ message: "Weather record not found", error });
    }
  }
  //-------------------------------------------------------------------------------------------------------
  static async deleteWeather(req: Request, res: Response): Promise<any> {
    const { id } = req.params;

    try {
      await weatherService.deleteWeather(Number(id));
      return res
        .status(200)
        .json({ message: "Weather record deleted successfully" });
    } catch (error) {
      console.error("Error deleting weather record:", error);
      return res
        .status(404)
        .json({ message: "Weather record not found", error });
    }
  }
  //-------------------------------------------------------------------------------------------------------
  static async getLatestWeatherByCityName(
    req: Request,
    res: Response
  ): Promise<any> {
    const { cityName } = req.params;

    try {
      const latestWeather =
        await weatherService.getLatestWeatherByCityName(cityName);
      if (!latestWeather)
        return res
          .status(404)
          .json({ message: "No weather data found for this city" });

      return res.status(200).json(latestWeather);
    } catch (error) {
      console.error("Error fetching latest weather data:", error);
      return res.status(500).json({ message: "Internal server error", error });
    }
  }
}
