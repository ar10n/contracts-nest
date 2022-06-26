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
import { CONTRACT_NOT_FOUND } from './contract.constants';
import { ContractService } from './contract.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { PatchContractDto } from './dto/patch-contract.dto';

@Controller('contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Post('create')
  async create(@Body() dto: CreateContractDto) {
    return this.contractService.create(dto);
  }

  @Get('all')
  async getAll() {
    return this.contractService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    const obj = await this.contractService.getOne(id);
    if (!obj) {
      throw new HttpException(CONTRACT_NOT_FOUND, HttpStatus.NOT_FOUND);
    } else {
      return obj;
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const obj = await this.contractService.delete(id);
    if (!obj) {
      throw new HttpException(CONTRACT_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: PatchContractDto) {
    const obj = await this.contractService.patch(id, dto);
    if (!obj) {
      throw new HttpException(CONTRACT_NOT_FOUND, HttpStatus.NOT_FOUND);
    } else {
      return obj;
    }
  }
}
