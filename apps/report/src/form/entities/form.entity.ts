import { Column, Entity } from "typeorm";
import { BaseModel } from "../../baseModel";

@Entity()
export class Form extends BaseModel{
    @Column({type:"json",nullable:false})
    form:JSON;
}