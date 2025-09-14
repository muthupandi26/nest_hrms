import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'projectAssignment', timestamps: true })
export class ProjectAssignment extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  assignmentId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  companyId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  projectId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  employeeId: number;

  @Column({ type: DataType.STRING, allowNull: false })
  role: string; // e.g., Dev, QA, PM

  @Column({ type: DataType.INTEGER, allowNull: false })
  allocationPercentage: number; // 0..100

  @Column({ type: DataType.DATE, allowNull: false })
  startDate: Date;

  @Column({ type: DataType.DATE, allowNull: true })
  endDate: Date;
}
