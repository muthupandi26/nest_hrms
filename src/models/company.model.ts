import { Table, Column, Model } from 'sequelize-typescript';

@Table({ tableName: 'companies', timestamps: true })
export class Company extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  companyId: number;

  @Column
  name: string;

  @Column
  registration_no: string;

  @Column
  gst: string;

  @Column
  address: string;

  @Column
  financial_year: string;

  @Column({ allowNull: true })
  financial_year_start: Date;

  @Column({ allowNull: true })
  financial_year_end: Date;
}
