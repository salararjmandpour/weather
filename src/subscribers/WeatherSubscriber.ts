import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  UpdateEvent,
} from "typeorm";
import { Weather } from "../entities/weather.entity";

@EventSubscriber()
export class WeatherSubscriber implements EntitySubscriberInterface<Weather> {
  listenTo() {
    return Weather;
  }

  afterInsert(event: InsertEvent<Weather>) {
    console.log(`A new weather record has been inserted:`, event.entity);
  }

  afterUpdate(event: UpdateEvent<Weather>) {
    console.log(`Weather record has been updated:`, event.entity);
  }
}
