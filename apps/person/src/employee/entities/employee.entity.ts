import { Column, Entity } from "typeorm";
import { BaseModel } from "../../baseModel";

@Entity()
export class Employee extends BaseModel{
    @Column()
    start_date:Date;
    @Column()
    end_date:Date;
}

