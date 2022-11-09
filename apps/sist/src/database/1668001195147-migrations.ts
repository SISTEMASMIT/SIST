import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1668001195147 implements MigrationInterface {
    name = 'migrations1668001195147'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`service\` CHANGE \`example2\` \`algodon_azucar\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`service\` DROP COLUMN \`algodon_azucar\``);
        await queryRunner.query(`ALTER TABLE \`service\` ADD \`algodon_azucar\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`service\` DROP COLUMN \`algodon_azucar\``);
        await queryRunner.query(`ALTER TABLE \`service\` ADD \`algodon_azucar\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`service\` CHANGE \`algodon_azucar\` \`example2\` varchar(255) NOT NULL`);
    }

}
