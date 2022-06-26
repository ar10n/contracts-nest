import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { PatchShipmentDto } from './dto/patch-shipment.dto';
import { SHIPMENT_NOT_FOUND } from './shipment.constants';
import { ShipmentService } from './shipment.service';

@Controller('shipment')
export class ShipmentController {
  constructor(private readonly shipmentService: ShipmentService) {}

  @Post('create')
  async create(@Body() dto: CreateShipmentDto) {
    return this.shipmentService.create(dto);
  }

  @Get('all')
  async getAll() {
    return this.shipmentService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    const obj = await this.shipmentService.getOne(id);
    if (!obj) {
      throw new HttpException(SHIPMENT_NOT_FOUND, HttpStatus.NOT_FOUND);
    } else {
      return obj;
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const obj = await this.shipmentService.delete(id);
    if (!obj) {
      throw new HttpException(SHIPMENT_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: PatchShipmentDto) {
    const obj = await this.shipmentService.patch(id, dto);
    if (!obj) {
      throw new HttpException(SHIPMENT_NOT_FOUND, HttpStatus.NOT_FOUND);
    } else {
      return obj;
    }
  }
}
