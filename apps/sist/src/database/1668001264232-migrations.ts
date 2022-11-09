import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1668001264232 implements MigrationInterface {
    name = 'migrations1668001264232'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`service\` DROP COLUMN \`example2\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`service\` ADD \`example2\` varchar(255) NOT NULL`);
    }

}
