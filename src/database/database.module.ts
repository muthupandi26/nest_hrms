import { Module, Global, OnApplicationBootstrap } from '@nestjs/common';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { models } from 'src/models';
import { setupAssociations } from './model-associations';
import { User } from 'src/models/user.model';
import * as bcrypt from 'bcrypt';

const alterTables = true;
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

    console.log('✅ Tables synced');

    const superadminExists = await User.findOne({
      where: { role: 'superadmin' },
    });
    if (!superadminExists) {
      console.log('🛠 Creating default superadmin...');

      const passwordHash = await bcrypt.hash('SuperAdmin@123', 10);

      await User.create({
        employeeId: null, // No employee yet
        email: 'superadmin@company.com',
        password: passwordHash,
        role: 'superadmin',
      });

      console.log('✅ Superadmin created successfully');
    } else {
      console.log('ℹ️ Superadmin already exists');
    }

    if (forceReset) {
      console.log('🔥 All tables dropped and recreated!');
    } else if (alterTables) {
      console.log('✅ Tables updated to match models (altered safely)');
    } else {
      console.log('ℹ️ Tables not modified');
    }
  }
}
