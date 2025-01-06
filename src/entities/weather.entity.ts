import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Weather {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  cityName: string;

  @Column()
  country: string;

  @Column("float")
  temperature: number;

  @Column()
  description: string;

  @Column("float")
  humidity: number;

  @Column("float")
  windSpeed: number;

  @CreateDateColumn()
  fetchedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor(
    cityName: string,
    country: string,
    temperature: number,
    description: string,
    humidity: number,
    windSpeed: number,
    fetchedAt: Date
  ) {
    this.cityName = cityName;
    this.country = country;
    this.temperature = temperature;
    this.description = description;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
    this.fetchedAt = fetchedAt;
  }
}
