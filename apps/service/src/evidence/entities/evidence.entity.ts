import { Column, Entity } from "typeorm";
import { BaseModel } from "../../baseModel";

@Entity()
export class Evidence extends BaseModel{
    @Column()
    id_resource:string;

    @Column({type:"json",nullable:false})
    photos:JSON;
}
