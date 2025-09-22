import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Company } from 'src/models/company.model';
import { CreateCompanyDto } from './create-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company)
    private readonly companyModel: typeof Company,
  ) {}

  async create(dto: CreateCompanyDto): Promise<Company> {
    return this.companyModel.create(dto as any);
  }

  async findAll(): Promise<Company[]> {
    return this.companyModel.findAll();
  }
}
