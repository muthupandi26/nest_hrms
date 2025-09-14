import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'expense', timestamps: true })
export class Expense extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  expenseId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  companyId: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  projectId: number; // null => general overhead/infra

  @Column({ type: DataType.STRING, allowNull: false })
  category: string; // Salary, Rent, Tools, Utilities, etc.

  @Column({ type: DataType.DECIMAL(15, 2), allowNull: false })
  amount: number;

  @Column({ type: DataType.DATE, allowNull: false })
  expenseDate: Date;

  @Column({ type: DataType.TEXT, allowNull: true })
  notes: string;
}
