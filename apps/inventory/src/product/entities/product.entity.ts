import { Column, Entity } from "typeorm";
import { BaseModel } from "../../baseModel";
@Entity()
export class Product extends BaseModel{
    @Column()
    id_category:string;
}
