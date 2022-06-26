import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ClaimModule } from './claim/claim.module';
import { ClientModule } from './client/client.module';
import { CompanyModule } from './company/company.module';
import { getMongoConfig } from './configs/mongo.config';
import { ContractModule } from './contract/contract.module';
import { ManufacturerModule } from './manufacturer/manufacturer.module';
import { ProductModule } from './product/product.module';
import { RegionModule } from './region/region.module';
import { ShipmentModule } from './shipment/shipment.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig
    }),
    AuthModule,
    RegionModule,
    ManufacturerModule,
    ProductModule,
    ClientModule,
    CompanyModule,
    ShipmentModule,
    ClaimModule,
    ContractModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
