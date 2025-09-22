import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Department } from 'src/models/department.model';
import { CreateDepartmentDto } from './department.dto';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectModel(Department)
    private readonly departmentModel: typeof Department,
  ) {}

  async create(dto: CreateDepartmentDto): Promise<Department> {
    return this.departmentModel.create(dto as any);
  }

  async findAll(): Promise<Department[]> {
    return this.departmentModel.findAll();
  }
}
