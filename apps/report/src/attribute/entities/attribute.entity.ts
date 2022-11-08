import { Column, Entity } from "typeorm";
import { BaseModel } from "../../baseModel";

@Entity()
export class Attribute extends BaseModel{
    @Column({type:"json",nullable:false})
    attribute:JSON;
}