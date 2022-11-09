import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1668006746707 implements MigrationInterface {
    name = 'migrations1668006746707'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`action\` DROP COLUMN \`prueba\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`action\` ADD \`prueba\` varchar(255) NOT NULL`);
    }

}
