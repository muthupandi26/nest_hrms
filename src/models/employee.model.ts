import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({ tableName: 'employee', timestamps: true })
export class Employee extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  employeeId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  companyId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  departmentId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  managerId: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  contact: string;

  @Column({ type: DataType.STRING, allowNull: true })
  address: string;

  @Column({ type: DataType.STRING, allowNull: false })
  designation: string;

  @Column({ type: DataType.DATE, allowNull: false })
  joiningDate: Date;
}
