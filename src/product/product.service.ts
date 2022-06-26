import { Injectable } from '@nestjs/common';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { CreateProductDto } from './dto/create-product.dto';
import { PatchProductDto } from './dto/patch-product.dto';
import { ProductModel } from './product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(ProductModel)
    private readonly productModel: ModelType<ProductModel>
  ) {}

  async create(dto: CreateProductDto): Promise<DocumentType<ProductModel>> {
    return this.productModel.create(dto);
  }

  async getAll(): Promise<DocumentType<ProductModel>[]> {
    return this.productModel.find().exec();
  }

  async getOne(id: string): Promise<DocumentType<ProductModel> | null> {
    return this.productModel.findById(id).populate('manufacturer').exec();
  }

  async delete(id: string): Promise<DocumentType<ProductModel> | null> {
    return this.productModel.findByIdAndDelete(id).exec();
  }

  async patch(
    id: string,
    dto: PatchProductDto
  ): Promise<DocumentType<ProductModel> | null> {
    await this.productModel.findByIdAndUpdate(id, dto).exec();
    return await this.productModel.findById(id).exec();
  }
}
