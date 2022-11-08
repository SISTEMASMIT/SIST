import { Module } from '@nestjs/common';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';
import { WarehouseModule } from './warehouse/warehouse.module';
import { ResourceModule } from './resource/resource.module';
import { ProductModule } from './product/product.module';
import { ToolModule } from './tool/tool.module';
import { CategoryModule } from './category/category.module';
import { ConfigModule } from '@nestjs/config';
import { typeOrmAsyncConfig } from './typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChangeModule } from './change/change.module';

@Module({
  imports: [WarehouseModule, ResourceModule, ProductModule, ToolModule, CategoryModule,ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: `./apps/inventory/config/env/${process.env.NODE_ENV}.env`}),
  TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
  ChangeModule],
  controllers: [InventoryController],
  providers: [InventoryService],
})
export class InventoryModule {}
