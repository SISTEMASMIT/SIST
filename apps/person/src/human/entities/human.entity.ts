import { Column, Entity } from "typeorm";
import { BaseModel } from "../../baseModel";
@Entity()
export class Human extends BaseModel{
    @Column()
    name:string;
    @Column()
    last_name:string;
    @Column()
    birth_date:Date;
    @Column()
    phone_number:number;
}
