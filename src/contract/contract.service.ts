import { Injectable } from '@nestjs/common';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { ContractModel } from './contract.model';
import { CreateContractDto } from './dto/create-contract.dto';
import { PatchContractDto } from './dto/patch-contract.dto';

@Injectable()
export class ContractService {
  constructor(
    @InjectModel(ContractModel)
    private readonly contractModel: ModelType<ContractModel>
  ) {}

  async create(dto: CreateContractDto): Promise<DocumentType<ContractModel>> {
    return this.contractModel.create(dto);
  }

  async getAll(): Promise<DocumentType<ContractModel>[]> {
    return this.contractModel.find().exec();
  }

  async getOne(id: string): Promise<DocumentType<ContractModel> | null> {
    return this.contractModel
      .findById(id)
      .populate('client')
      .populate('company')
      .populate('products')
      .populate('region')
      .populate('shipments')
      .populate('claims')
      .exec();
  }

  async delete(id: string): Promise<DocumentType<ContractModel> | null> {
    return this.contractModel.findByIdAndDelete(id).exec();
  }

  async patch(
    id: string,
    dto: PatchContractDto
  ): Promise<DocumentType<ContractModel> | null> {
    await this.contractModel.findByIdAndUpdate(id, dto).exec();
    return await this.contractModel.findById(id).exec();
  }
}
