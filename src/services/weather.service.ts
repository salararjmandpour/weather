import axios from "axios";
import { AppDataSource } from "../config/typeorm/data-source";
import { Weather } from "../entities/weather.entity";
import { config } from "../config";

export class WeatherService {
  private weatherRepository = AppDataSource.getRepository(Weather);

  async getAllWeather(): Promise<Weather[]> {
    try {
      return await this.weatherRepository.find();
    } catch (error) {
      console.error("Error fetching all weather data:", error);
      throw new Error("Could not fetch weather data");
    }
  }

  //-----------------------------------------------------------------------------------------------------

  async getWeatherById(id: number): Promise<Weather | null> {
    try {
      return await this.weatherRepository.findOneBy({ id });
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw new Error("Could not fetch weather data");
    }
  }

  //-----------------------------------------------------------------------------------------------------

  async fetchAndSaveWeather(
    cityName: string,
    country: string
  ): Promise<Weather> {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${country}&appid=${config.openWeatherApiKey}`;
      const response = await axios.get(url);

      const weatherData = {
        cityName,
        country,
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        windSpeed: response.data.wind.speed,
        fetchedAt: new Date(),
      };

      const weatherEntity = this.weatherRepository.create(weatherData);
      return await this.weatherRepository.save(weatherEntity);
    } catch (error) {
      console.error(
        "Error fetching weather from API or saving to database:",
        error
      );
      throw new Error("Failed to fetch or save weather data");
    }
  }
  //-----------------------------------------------------------------------------------------------------
  async updateWeather(
    id: number,
    updateData: Partial<Weather>
  ): Promise<Weather> {
    try {
      const weather = await this.weatherRepository.findOneBy({ id });
      if (!weather) throw new Error("Weather data not found");

      const updatedWeather = this.weatherRepository.merge(weather, updateData);
      return await this.weatherRepository.save(updatedWeather);
    } catch (error) {
      console.error("Error updating weather data:", error);
      throw new Error("Could not update weather data");
    }
  }

  //-----------------------------------------------------------------------------------------------------
  async deleteWeather(id: number): Promise<void> {
    try {
      const weather = await this.weatherRepository.findOneBy({ id });
      if (!weather) throw new Error("Weather record not found");

      await this.weatherRepository.remove(weather);
    } catch (error) {
      console.error("Error deleting weather data:", error);
      throw new Error("Could not delete weather data");
    }
  }
  //-----------------------------------------------------------------------------------------------------
  async getLatestWeatherByCityName(cityName: string): Promise<Weather | null> {
    try {
      return await this.weatherRepository.findOne({
        where: { cityName },
        order: { fetchedAt: "DESC" },
      });
    } catch (error) {
      console.error("Error fetching latest weather data:", error);
      throw new Error("Could not fetch latest weather data");
    }
  }
}
