import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({ tableName: 'employeeDocument', timestamps: true })
export class EmployeeDocument extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  documentId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  companyId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  employeeId: number;

  @Column({ type: DataType.STRING, allowNull: false })
  type: string;

  @Column({ type: DataType.STRING, allowNull: true })
  filePath: string;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  verifiedStatus: boolean;

  @Column({ type: DataType.INTEGER, allowNull: false })
  verifiedBy: number;

  @Column({ type: DataType.DATE, allowNull: true })
  verifiedAt: Date;
}
