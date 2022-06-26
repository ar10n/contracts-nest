import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ManufacturerController } from './manufacturer.controller';
import { ManufacturerModel } from './manufacturer.model';
import { ManufacturerService } from './manufacturer.service';

@Module({
  controllers: [ManufacturerController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ManufacturerModel,
        schemaOptions: {
          collection: 'Manufacturer'
        }
      }
    ])
  ],
  providers: [ManufacturerService]
})
export class ManufacturerModule {}
