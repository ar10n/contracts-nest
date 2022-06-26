import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ShipmentController } from './shipment.controller';
import { ShipmentModel } from './shipment.model';
import { ShipmentService } from './shipment.service';

@Module({
  controllers: [ShipmentController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ShipmentModel,
        schemaOptions: {
          collection: 'Shipment'
        }
      }
    ])
  ],
  providers: [ShipmentService]
})
export class ShipmentModule {}
