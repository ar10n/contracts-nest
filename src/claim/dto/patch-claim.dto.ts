import { IsDate, IsString } from 'class-validator';

export class PatchClaimDto {
  @IsString()
  title?: string;

  @IsString()
  description?: string;

  @IsDate()
  startDate?: Date;

  @IsDate()
  endDate?: Date;
}
