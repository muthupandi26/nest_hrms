import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({ tableName: 'users', timestamps: true })
export class User extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  userId: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  employeeId: number;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;

  @Column({ type: DataType.STRING, allowNull: true })
  password: string;

  @Column({
    type: DataType.ENUM('superadmin', 'manager', 'employee'),
    allowNull: false,
  })
  role: string;

  @Column({ type: DataType.STRING, allowNull: true })
  oauth_provider: string;

  @Column({ type: DataType.STRING, allowNull: true })
  oauth_subject_id: string;
}
