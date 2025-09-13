import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'admin',
      password: 'admin',
      database: 'dockerpostgresdb',
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  exports: [SequelizeModule],
})
export class DatabaseModule {}
