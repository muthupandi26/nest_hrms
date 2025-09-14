import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({ tableName: 'payslip', timestamps: true })
export class Payslip extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  payslipId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  companyId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  employeeId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  month: number; // 1 to 12

  @Column({ type: DataType.INTEGER, allowNull: false })
  year: number;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  basicPay: number;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  allowances: number;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  deductions: number;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  pfContribution: number;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  netPay: number;

  @Column({ type: DataType.STRING, allowNull: false })
  filePath: string; // Generated PDF file path

  @Column({ type: DataType.DATE, allowNull: false })
  generatedAt: Date;
}
