import { IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateProductDto {
  @IsString()
  name: string;

  manufacturer: Types.ObjectId;
}
