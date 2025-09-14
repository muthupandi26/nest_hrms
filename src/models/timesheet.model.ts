import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'timesheet', timestamps: true })
export class Timesheet extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  timesheetId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  companyId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  employeeId: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  projectId: number; // null if hours are general or not project-specific

  @Column({ type: DataType.DATEONLY, allowNull: false })
  date: Date;

  @Column({ type: DataType.DECIMAL(5, 2), allowNull: false })
  hoursWorked: number; // e.g., 7.5 hours

  @Column({
    type: DataType.ENUM('Present', 'Absent', 'Late', 'Leave'),
    allowNull: false,
  })
  attendanceStatus: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  notes: string;
}
