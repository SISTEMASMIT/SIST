import { Column, Entity } from "typeorm";
import { BaseModel } from "../../baseModel";

@Entity()
export class ServiceSist extends BaseModel{
    @Column()
    id_employee:string;

    @Column()
    id_client:string;

    @Column()
    description:string;
    
}
