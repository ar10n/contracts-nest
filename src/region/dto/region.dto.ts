import { IsString } from 'class-validator';

export class RegionDto {
  @IsString()
  name: string;
}
