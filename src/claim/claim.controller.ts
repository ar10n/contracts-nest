import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { CLAIM_NOT_FOUND } from './claim.constants';
import { ClaimService } from './claim.service';
import { CreateClaimDto } from './dto/create-claim.dto';
import { PatchClaimDto } from './dto/patch-claim.dto';

@Controller('claim')
export class ClaimController {
  constructor(private readonly claimService: ClaimService) {}

  @UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Body() dto: CreateClaimDto) {
    return this.claimService.create(dto);
  }

  @Get('all')
  async getAll() {
    return this.claimService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    const obj = await this.claimService.getOne(id);
    if (!obj) {
      throw new HttpException(CLAIM_NOT_FOUND, HttpStatus.NOT_FOUND);
    } else {
      return obj;
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const obj = await this.claimService.delete(id);
    if (!obj) {
      throw new HttpException(CLAIM_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: PatchClaimDto) {
    const obj = await this.claimService.patch(id, dto);
    if (!obj) {
      throw new HttpException(CLAIM_NOT_FOUND, HttpStatus.NOT_FOUND);
    } else {
      return obj;
    }
  }
}
