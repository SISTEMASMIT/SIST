import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { typeOrmAsyncConfig } from './typeorm';
import { TypePersonModule } from './type_person/type_person.module';
import { ClientModule } from './client/client.module';
import { EmployeeModule } from './employee/employee.module';
import { UserModule } from './user/user.module';
import { OrganizationModule } from './organization/organization.module';
import { HumanModule } from './human/human.module';
import { ChangeModule } from './change/change.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: `./apps/person/config/env/${process.env.NODE_ENV}.env`}),
  TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
  PersonModule,
  TypePersonModule,
  ClientModule,
  EmployeeModule,
  UserModule,
  OrganizationModule,
  HumanModule,
  ChangeModule],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}
