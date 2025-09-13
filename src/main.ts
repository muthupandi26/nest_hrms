import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Sequelize } from 'sequelize-typescript';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const sequelize = app.get(Sequelize); // Get Sequelize instance
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully');
  } catch (err) {
    console.error('❌ Unable to connect to the database:', err);
  }

  const PORT = process.env.PORT ?? 3434;
  await app.listen(PORT);
  console.log('app running on below port', PORT);
}
bootstrap();
