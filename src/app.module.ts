import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module'; // Importa UsersModule en lugar de UserService
import { ConfigModule } from '@nestjs/config';
import db_config from 'libs/persistence/db_config';
import { PersistenceModule } from 'libs/persistence/persistence.module';
import { UserController } from 'modules/users/controllers/users.controller';
import { AuthController } from 'libs/auth/controllers/auth.controller';
import { AuthModule } from 'libs/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [db_config],
      isGlobal: true,
    }),
    UsersModule,
    AuthModule,
    PersistenceModule,
  ],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
