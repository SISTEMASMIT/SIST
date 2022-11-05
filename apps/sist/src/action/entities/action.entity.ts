import { BaseEntity, Entity } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
@Entity("Action")
export class Action extends BaseEntity{
    @ApiProperty({
        description:"This attribute body it's the request body for the entry on microservice ",
    })
    body:JSON;
    
    @ApiProperty({
        description:"This attribute header it's the request header for the entry on microservice "
    })
    header:JSON;
    @ApiProperty({description:"This attribute it's the identifier that show the dir of the microservice in the system"})
    service:string;
}
