import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'project', timestamps: true })
export class Project extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  projectId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  companyId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  departmentId: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.DATE, allowNull: false })
  startDate: Date;

  @Column({ type: DataType.DATE, allowNull: true })
  endDate: Date;

  @Column({ type: DataType.DECIMAL(15, 2), allowNull: true, defaultValue: 0.0 })
  budget: number;

  @Column({
    type: DataType.ENUM('planned', 'active', 'on_hold', 'closed'),
    allowNull: false,
    defaultValue: 'planned',
  })
  status: string; // planned | active | on_hold | closed
}
