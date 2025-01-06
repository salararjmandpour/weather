import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1736168328894 implements MigrationInterface {
    name = 'Migrations1736168328894'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "weather" (
                "id" SERIAL NOT NULL,
                "cityName" character varying NOT NULL,
                "country" character varying NOT NULL,
                "temperature" double precision NOT NULL,
                "description" character varying NOT NULL,
                "humidity" double precision NOT NULL,
                "windSpeed" double precision NOT NULL,
                "fetchedAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_af9937471586e6798a5e4865f2d" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "weather"
        `);
    }

}
