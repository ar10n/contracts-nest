import { Module } from '@nestjs/common';
import { ContractController } from './contract.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { ContractModel } from './contract.model';
import { ContractService } from './contract.service';

@Module({
  controllers: [ContractController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ContractModel,
        schemaOptions: {
          collection: 'Contract'
        }
      }
    ])
  ],
  providers: [ContractService]
})
export class ContractModule {}
