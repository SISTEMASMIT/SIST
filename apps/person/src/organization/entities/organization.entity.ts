import { Column, Entity } from "typeorm";
import { BaseModel } from "../../baseModel";

@Entity()
export class Organization extends BaseModel{
    @Column()
    name:string;
    @Column()
    description:string;
    @Column()
    address:string;
    @Column()
    organization_phone_number:number;
}
