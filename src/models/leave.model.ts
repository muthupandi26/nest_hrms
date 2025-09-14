import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'leave', timestamps: true })
export class Leave extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  leaveId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  companyId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  employeeId: number;

  @Column({
    type: DataType.ENUM(
      'Casual',
      'Sick',
      'Paid',
      'Maternity',
      'Paternity',
      'Other',
    ),
    allowNull: false,
  })
  leaveType: string;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  startDate: Date;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  endDate: Date;

  @Column({
    type: DataType.ENUM('Pending', 'Approved', 'Rejected'),
    allowNull: false,
    defaultValue: 'Pending',
  })
  status: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  approvedBy: number; // employeeId of manager/director

  @Column({ type: DataType.DATE, allowNull: true })
  approvedAt: Date;
}
