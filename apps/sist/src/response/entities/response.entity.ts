import { Column, Entity, OneToMany } from "typeorm";
import { BaseModel } from "../../baseModel";
import { Service } from "../../service/entities/service.entity";
@Entity()
export class Response extends BaseModel{
    @OneToMany(()=> Service,(service) => service.action)
    service:Service[];
    
    @Column({type:"json", nullable:false})
    response:JSON;

    @Column({type:"json",nullable:false})
    user:JSON;
    
    @Column()
    status:string;
}
