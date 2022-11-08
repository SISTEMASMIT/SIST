import { Column, Entity } from "typeorm";
import { BaseModel } from "../../baseModel";

@Entity()
export class Change extends BaseModel{
    @Column()
    table:string;

    @Column({type:"json",nullable:false})
    old_data:JSON;

    @Column({type:"json",nullable:false})
    changes:JSON;

}
