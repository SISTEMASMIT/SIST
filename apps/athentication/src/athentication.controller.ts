import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AthenticationService } from './athentication.service';

@Controller()
export class AthenticationController {
  constructor(private readonly athenticationService: AthenticationService) {}

  // @Get()
  // getHello(): string {
  //   return this.athenticationService.getHello();
  // }

  @EventPattern("AUTHENTICATION_REGISTER")
  hanndleNewAuthentication(data:any){
    console.log("authentication register")
  }
}
