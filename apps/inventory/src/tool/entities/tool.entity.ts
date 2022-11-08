import { BaseModel } from "../../baseModel";
import { Column, Entity } from "typeorm";

@Entity()
export class Tool extends BaseModel{
    @Column()
    id_resource:string;
}
