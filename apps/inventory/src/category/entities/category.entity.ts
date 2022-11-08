import { Column, Entity } from "typeorm";
import { BaseModel } from "../../baseModel";

@Entity()
export class Category extends BaseModel{
    @Column()
    name:string;
    @Column()
    description:string;
}
