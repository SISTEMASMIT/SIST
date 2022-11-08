import { Column, Entity, ManyToOne} from "typeorm";
import { Action } from "../../action/entities/action.entity";
import { BaseModel } from "../../baseModel";
import { Response } from "../../response/entities/response.entity"
@Entity()
export class Service extends BaseModel{
    @Column()
    name:string;
    
    @Column()
    description:string;

    @ManyToOne(() => Action, (action) => action.service)
    action:Action;

    @ManyToOne(() =>Response, (response) => response.service)
    response:Response;
}