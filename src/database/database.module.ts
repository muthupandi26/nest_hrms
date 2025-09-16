import { Module, Global, OnApplicationBootstrap } from '@nestjs/common';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { models } from 'src/models';
import { setupAssociations } from './model-associations';

const alterTables = false;
const forceReset = false;

@Global()
@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: async () => {
        return {
          dialect: 'postgres',
          host: 'localhost',
          port: 5434,
          username: 'admin',
          password: 'admin',
          database: 'dockerpostgresdb',
          models,
          autoLoadModels: true,
          synchronize: false, // always false in production
          logging: console.log,
        } as SequelizeModuleOptions;
      },
    }),
  ],
})
export class DatabaseModule implements OnApplicationBootstrap {
  constructor(private readonly sequelize: Sequelize) {} // Nest injects Sequelize instance

  async onApplicationBootstrap() {
    // 1️⃣ Setup associations
    setupAssociations();

    // 2️⃣ Sync tables
    await this.sequelize.sync({ alter: alterTables, force: forceReset });

    if (forceReset) {
      console.log('🔥 All tables dropped and recreated!');
    } else if (alterTables) {
      console.log('✅ Tables updated to match models (altered safely)');
    } else {
      console.log('ℹ️ Tables not modified');
    }
  }
}
