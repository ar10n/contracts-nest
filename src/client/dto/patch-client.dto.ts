import { IsString } from 'class-validator';

export class PatchClientDto {
  @IsString()
  name?: string;

  @IsString()
  individualNumber?: string;

  @IsString()
  phone?: string;

  @IsString()
  email?: string;

  @IsString()
  comment?: string;
}
