import { Column, Entity } from "typeorm";
import { BaseModel } from "../../baseModel";

@Entity()
export class Followment extends BaseModel{
    @Column()
    status:string;
    
}
