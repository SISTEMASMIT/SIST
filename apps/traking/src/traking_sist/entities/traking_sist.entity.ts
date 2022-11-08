import { Column, Entity } from "typeorm";
import { BaseModel } from "../../baseModel";

@Entity()
export class TrakingSist extends BaseModel{
    @Column()
    id_persona:string;

    @Column()
    position:string;
}