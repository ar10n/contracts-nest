import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { RegionController } from './region.controller';
import { RegionModel } from './region.model';
import { RegionService } from './region.service';

@Module({
  controllers: [RegionController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: RegionModel,
        schemaOptions: {
          collection: 'Region'
        }
      }
    ])
  ],
  providers: [RegionService]
})
export class RegionModule {}
