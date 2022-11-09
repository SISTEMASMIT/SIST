import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1668001500012 implements MigrationInterface {
    name = 'migrations1668001500012'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`service\` DROP COLUMN \`algodon_azucar\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`service\` ADD \`algodon_azucar\` varchar(255) NOT NULL`);
    }

}
