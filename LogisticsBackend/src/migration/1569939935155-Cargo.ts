import {MigrationInterface, QueryRunner} from "typeorm";

export class Cargo1569939935155 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "cargo" ("id" SERIAL NOT NULL, "cargotype" character varying NOT NULL, "cargoweight" integer NOT NULL, "cargowidth" integer NOT NULL, "cargolength" integer NOT NULL, "cardgoheight" integer NOT NULL, "description" character varying NOT NULL, "disclaimers" character varying NOT NULL, "isHarzard" boolean NOT NULL, "insuranced" boolean NOT NULL, "originadd" character varying NOT NULL, "originstate" character varying NOT NULL, "origincountry" character varying NOT NULL, "originpostcode" integer NOT NULL, "origincontact" character varying NOT NULL, "destadd" character varying NOT NULL, "deststate" character varying NOT NULL, "destcountry" character varying NOT NULL, "destpostcode" integer NOT NULL, "destcontact" character varying NOT NULL, "shippingdate" TIMESTAMP NOT NULL, CONSTRAINT "PK_1af8b2a790f35aedbe7e3da4199" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "shipping" ("id" SERIAL NOT NULL, "originadd" character varying NOT NULL, "originstate" character varying NOT NULL, "origincountry" character varying NOT NULL, "originpostcode" integer NOT NULL, "origincontact" character varying NOT NULL, "destadd" character varying NOT NULL, "deststate" character varying NOT NULL, "destcountry" character varying NOT NULL, "destpostcode" integer NOT NULL, "destcontact" character varying NOT NULL, "shippingdate" TIMESTAMP NOT NULL, CONSTRAINT "PK_0dc6ac92ee9cbc2c1611d77804c" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "user"`, undefined);
        await queryRunner.query(`DROP TABLE "shipping"`, undefined);
        await queryRunner.query(`DROP TABLE "cargo"`, undefined);
    }

}
