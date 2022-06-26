import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';

export class CreateShipmentDto {
  @IsString()
  number: string;

  @IsNumber()
  price: number;

  @IsDate()
  startDate: Date;

  @IsDate()
  endDate?: Date;

  @IsDate()
  payDate?: Date;

  @IsBoolean()
  isDelivered: boolean;

  @IsBoolean()
  isPaid: boolean;
}
