import { Injectable } from '@nestjs/common';
import { DocumentType, ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { PatchShipmentDto } from './dto/patch-shipment.dto';
import { ShipmentModel } from './shipment.model';

@Injectable()
export class ShipmentService {
  constructor(
    @InjectModel(ShipmentModel)
    private readonly shipmentModel: ModelType<ShipmentModel>
  ) {}

  async create(dto: CreateShipmentDto): Promise<DocumentType<ShipmentModel>> {
    return this.shipmentModel.create(dto);
  }

  async getAll(): Promise<DocumentType<ShipmentModel>[]> {
    return this.shipmentModel.find().exec();
  }

  async getOne(id: string): Promise<DocumentType<ShipmentModel> | null> {
    return this.shipmentModel.findById(id).exec();
  }

  async delete(id: string): Promise<DocumentType<ShipmentModel> | null> {
    return this.shipmentModel.findByIdAndDelete(id).exec();
  }

  async patch(
    id: string,
    dto: PatchShipmentDto
  ): Promise<DocumentType<ShipmentModel> | null> {
    await this.shipmentModel.findByIdAndUpdate(id, dto).exec();
    return await this.shipmentModel.findById(id).exec();
  }
}
