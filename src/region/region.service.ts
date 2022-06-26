import { Injectable } from '@nestjs/common';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { RegionDto } from './dto/region.dto';
import { RegionModel } from './region.model';

@Injectable()
export class RegionService {
  constructor(
    @InjectModel(RegionModel)
    private readonly regionModel: ModelType<RegionModel>
  ) {}

  async create(dto: RegionDto): Promise<DocumentType<RegionModel>> {
    return this.regionModel.create(dto);
  }

  async getAll(): Promise<DocumentType<RegionModel>[]> {
    return this.regionModel.find().exec();
  }

  async getOne(id: string): Promise<DocumentType<RegionModel> | null> {
    return this.regionModel.findById(id).exec();
  }

  async delete(id: string): Promise<DocumentType<RegionModel> | null> {
    return this.regionModel.findByIdAndDelete(id).exec();
  }

  async patch(
    id: string,
    dto: RegionDto
  ): Promise<DocumentType<RegionModel> | null> {
    await this.regionModel.findByIdAndUpdate(id, dto).exec();
    return await this.regionModel.findById(id).exec();
  }
}
