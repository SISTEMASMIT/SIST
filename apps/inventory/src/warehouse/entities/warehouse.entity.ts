
import { Column, Entity } from "typeorm";
import { BaseModel } from "../../baseModel";

@Entity()
export class Warehouse extends BaseModel{
    @Column()
    address:string;
    @Column()
    id_organization:string;
}
