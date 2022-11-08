import { Column, Entity } from "typeorm";
import { BaseModel } from "../../baseModel";

@Entity()
export class User extends BaseModel{
    @Column()
    payment:string;
    
}
