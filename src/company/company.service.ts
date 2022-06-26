import { Injectable } from '@nestjs/common';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { CompanyModel } from './company.model';
import { CompanyDto } from './dto/company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(CompanyModel)
    private readonly companyModel: ModelType<CompanyModel>
  ) {}

  async create(dto: CompanyDto): Promise<DocumentType<CompanyModel>> {
    return this.companyModel.create(dto);
  }

  async getAll(): Promise<DocumentType<CompanyModel>[]> {
    return this.companyModel.find().exec();
  }

  async getOne(id: string): Promise<DocumentType<CompanyModel> | null> {
    return this.companyModel.findById(id).exec();
  }

  async delete(id: string): Promise<DocumentType<CompanyModel> | null> {
    return this.companyModel.findByIdAndDelete(id).exec();
  }

  async patch(
    id: string,
    dto: CompanyDto
  ): Promise<DocumentType<CompanyModel> | null> {
    await this.companyModel.findByIdAndUpdate(id, dto).exec();
    return await this.companyModel.findById(id).exec();
  }
}
