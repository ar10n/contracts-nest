import { Injectable } from '@nestjs/common';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { ClaimModel } from './claim.model';
import { CreateClaimDto } from './dto/create-claim.dto';
import { PatchClaimDto } from './dto/patch-claim.dto';

@Injectable()
export class ClaimService {
  constructor(
    @InjectModel(ClaimModel)
    private readonly claimModel: ModelType<ClaimModel>
  ) {}

  async create(dto: CreateClaimDto): Promise<DocumentType<ClaimModel>> {
    return this.claimModel.create(dto);
  }

  async getAll(): Promise<DocumentType<ClaimModel>[]> {
    return this.claimModel.find().exec();
  }

  async getOne(id: string): Promise<DocumentType<ClaimModel> | null> {
    return this.claimModel.findById(id).exec();
  }

  async delete(id: string): Promise<DocumentType<ClaimModel> | null> {
    return this.claimModel.findByIdAndDelete(id).exec();
  }

  async patch(
    id: string,
    dto: PatchClaimDto
  ): Promise<DocumentType<ClaimModel> | null> {
    await this.claimModel.findByIdAndUpdate(id, dto).exec();
    return await this.claimModel.findById(id).exec();
  }
}
