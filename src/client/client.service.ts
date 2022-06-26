import { Injectable } from '@nestjs/common';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { ClientModel } from './client.model';
import { CreateClientDto } from './dto/create-client.dto';
import { PatchClientDto } from './dto/patch-client.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(ClientModel)
    private readonly clientModel: ModelType<ClientModel>
  ) {}

  async create(dto: CreateClientDto): Promise<DocumentType<ClientModel>> {
    return this.clientModel.create(dto);
  }

  async getAll(): Promise<DocumentType<ClientModel>[]> {
    return this.clientModel.find().exec();
  }

  async getOne(id: string): Promise<DocumentType<ClientModel> | null> {
    return this.clientModel.findById(id).exec();
  }

  async delete(id: string): Promise<DocumentType<ClientModel> | null> {
    return this.clientModel.findByIdAndDelete(id).exec();
  }

  async patch(
    id: string,
    dto: PatchClientDto
  ): Promise<DocumentType<ClientModel> | null> {
    await this.clientModel.findByIdAndUpdate(id, dto).exec();
    return await this.clientModel.findById(id).exec();
  }
}
