import { Column, Entity, OneToMany } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { BaseModel } from "../../baseModel";
import { Service } from "../../service/entities/service.entity";
@Entity()
export class Action extends BaseModel{
    
    @ApiProperty({
        description:"This attribute body it's the request body for the entry on microservice ",
    })
    @Column({type:"json",nullable:false})
    body:JSON;
    
    @ApiProperty({
        description:"This attribute header it's the request header for the entry on microservice "
    })
    @Column({type:"json",nullable:false})
    header:JSON;
    
    @ApiProperty({description:"This attribute it's the identifier that show the dir of the microservice in the system"})
    
    @OneToMany(()=> Service,(service) => service.action)
    service:Service[];
    

}
