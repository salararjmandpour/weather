import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1736174719636 implements MigrationInterface {
    name = 'Migrations1736174719636'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "weather"
            ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()
        `);
        await queryRunner.query(`
            ALTER TABLE "weather"
            ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "weather" DROP COLUMN "updatedAt"
        `);
        await queryRunner.query(`
            ALTER TABLE "weather" DROP COLUMN "createdAt"
        `);
    }

}
