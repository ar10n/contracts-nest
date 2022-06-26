import { Injectable } from '@nestjs/common';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { ManufacturerDto } from './dto/manufacturer.dto';
import { ManufacturerModel } from './manufacturer.model';

@Injectable()
export class ManufacturerService {
  constructor(
    @InjectModel(ManufacturerModel)
    private readonly manufacturerModel: ModelType<ManufacturerModel>
  ) {}

  async create(dto: ManufacturerDto): Promise<DocumentType<ManufacturerModel>> {
    return this.manufacturerModel.create(dto);
  }

  async getAll(): Promise<DocumentType<ManufacturerModel>[]> {
    return this.manufacturerModel.find().exec();
  }

  async getOne(id: string): Promise<DocumentType<ManufacturerModel> | null> {
    return this.manufacturerModel.findById(id).exec();
  }

  async delete(id: string): Promise<DocumentType<ManufacturerModel> | null> {
    return this.manufacturerModel.findByIdAndDelete(id).exec();
  }

  async patch(
    id: string,
    dto: ManufacturerDto
  ): Promise<DocumentType<ManufacturerModel> | null> {
    await this.manufacturerModel.findByIdAndUpdate(id, dto).exec();
    return await this.manufacturerModel.findById(id).exec();
  }
}
