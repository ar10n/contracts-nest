import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ClientController } from './client.controller';
import { ClientModel } from './client.model';
import { ClientService } from './client.service';

@Module({
  controllers: [ClientController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ClientModel,
        schemaOptions: {
          collection: 'Client'
        }
      }
    ])
  ],
  providers: [ClientService]
})
export class ClientModule {}
