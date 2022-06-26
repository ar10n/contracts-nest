import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ClaimController } from './claim.controller';
import { ClaimModel } from './claim.model';
import { ClaimService } from './claim.service';

@Module({
  controllers: [ClaimController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ClaimModel,
        schemaOptions: {
          collection: 'Claim'
        }
      }
    ])
  ],
  providers: [ClaimService]
})
export class ClaimModule {}
