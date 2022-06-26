import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class PatchContractDto {
  @IsString()
  number?: string;

  @IsString()
  noticeNumber?: string;

  @IsDate()
  startDate?: Date;

  @IsDate()
  endDate?: Date;

  @IsNumber()
  price?: number;

  @IsNumber()
  daysToDeliver?: number;

  @IsNumber()
  daysToPay?: number;

  @IsBoolean()
  isDone?: boolean;
  client?: Types.ObjectId;
  company?: Types.ObjectId;
  products?: Types.ObjectId[];
  region?: Types.ObjectId;
  shipments?: Types.ObjectId[];
  claims?: Types.ObjectId[];
}
