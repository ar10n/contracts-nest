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
import { CLIENT_NOT_FOUND } from './client.constants';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { PatchClientDto } from './dto/patch-client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('create')
  async create(@Body() dto: CreateClientDto) {
    return this.clientService.create(dto);
  }

  @Get('all')
  async getAll() {
    return this.clientService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    const obj = await this.clientService.getOne(id);
    if (!obj) {
      throw new HttpException(CLIENT_NOT_FOUND, HttpStatus.NOT_FOUND);
    } else {
      return obj;
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const obj = await this.clientService.delete(id);
    if (!obj) {
      throw new HttpException(CLIENT_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: PatchClientDto) {
    const obj = await this.clientService.patch(id, dto);
    if (!obj) {
      throw new HttpException(CLIENT_NOT_FOUND, HttpStatus.NOT_FOUND);
    } else {
      return obj;
    }
  }
}
