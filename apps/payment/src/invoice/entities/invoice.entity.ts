import { User } from "apps/person/src/user/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseModel } from "../../baseModel";

@Entity()
export class Invoice extends BaseModel{
    @Column()
    id_user:string;
}
