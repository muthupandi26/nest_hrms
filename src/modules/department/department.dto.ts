import { IsString, IsNumber } from 'class-validator';

export class CreateDepartmentDto {
  @IsNumber()
  companyId: number;

  @IsString()
  name: string;
}
