import { IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  name: string;

  @IsString()
  registration_no: string;

  @IsString()
  gst: string;

  @IsString()
  address: string;

  @IsString()
  financial_year: string;

  @IsOptional()
  @IsDateString()
  financial_year_start?: Date;

  @IsOptional()
  @IsDateString()
  financial_year_end?: Date;
}
