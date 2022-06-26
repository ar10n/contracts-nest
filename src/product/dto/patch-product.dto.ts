import { IsString } from 'class-validator';
import { Types } from 'mongoose';

export class PatchProductDto {
  @IsString()
  name?: string;

  manufacturer?: Types.ObjectId;
}
