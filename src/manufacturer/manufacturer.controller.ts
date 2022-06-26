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
import { ManufacturerDto } from './dto/manufacturer.dto';
import { MANUFACTURER_NOT_FOUND } from './manufacturer.constants';
import { ManufacturerService } from './manufacturer.service';

@Controller('manufacturer')
export class ManufacturerController {
  constructor(private readonly manufacturerService: ManufacturerService) {}

  @Post('create')
  async create(@Body() dto: ManufacturerDto) {
    return this.manufacturerService.create(dto);
  }

  @Get('all')
  async getAll() {
    return this.manufacturerService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    const obj = await this.manufacturerService.getOne(id);
    if (!obj) {
      throw new HttpException(MANUFACTURER_NOT_FOUND, HttpStatus.NOT_FOUND);
    } else {
      return obj;
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const obj = await this.manufacturerService.delete(id);
    if (!obj) {
      throw new HttpException(MANUFACTURER_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: ManufacturerDto) {
    const obj = await this.manufacturerService.patch(id, dto);
    if (!obj) {
      throw new HttpException(MANUFACTURER_NOT_FOUND, HttpStatus.NOT_FOUND);
    } else {
      return obj;
    }
  }
}
