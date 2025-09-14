import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({ tableName: 'promotionSalaryHistory', timestamps: true })
export class PromotionSalaryHistory extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  historyId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  companyId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  employeeId: number;

  @Column({ type: DataType.STRING, allowNull: false })
  designation: string;

  @Column({ type: DataType.STRING, allowNull: false })
  level: string;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  salary: number;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  effectiveDate: Date;

  @Column({ type: DataType.STRING, allowNull: true })
  notes: string;
}
