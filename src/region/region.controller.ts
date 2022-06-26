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
import { RegionDto } from './dto/region.dto';
import { REGION_NOT_FOUND } from './region.constants';
import { RegionService } from './region.service';

@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Post('create')
  async create(@Body() dto: RegionDto) {
    return this.regionService.create(dto);
  }

  @Get('all')
  async getAll() {
    return this.regionService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    const obj = await this.regionService.getOne(id);
    if (!obj) {
      throw new HttpException(REGION_NOT_FOUND, HttpStatus.NOT_FOUND);
    } else {
      return obj;
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const obj = await this.regionService.delete(id);
    if (!obj) {
      throw new HttpException(REGION_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: RegionDto) {
    const obj = await this.regionService.patch(id, dto);
    if (!obj) {
      throw new HttpException(REGION_NOT_FOUND, HttpStatus.NOT_FOUND);
    } else {
      return obj;
    }
  }
}
