import { IsString, IsDate } from 'class-validator';

export class CreateClaimDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;
}
