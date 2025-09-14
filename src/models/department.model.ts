import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'departments', timestamps: true })
export class Department extends Model {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  departmentId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  companyId: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;
}
