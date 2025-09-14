import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'income', timestamps: true })
export class Income extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  incomeId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  companyId: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  projectId: number; // null if income is not project-specific

  @Column({ type: DataType.STRING, allowNull: false })
  source: string; // client name, subscription, etc.

  @Column({ type: DataType.DECIMAL(15, 2), allowNull: false })
  amount: number;

  @Column({ type: DataType.DATE, allowNull: false })
  incomeDate: Date;

  @Column({ type: DataType.TEXT, allowNull: true })
  notes: string;
}
