import { Module } from '@nestjs/common';
import { UserService } from './users/users.service';
import { UserController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './companies/persistence/db_config'
import { PersistenceModule } from 'companies/persistence/persistence.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [dbConfig],
      isGlobal: true,
    }),
    PersistenceModule],
  controllers: [ UserController ],
  providers: [ UserService ],
})
export class AppModule {}

