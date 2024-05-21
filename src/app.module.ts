import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './modules/companies/persistence/db_config'
import { PersistenceModule } from 'modules/companies/persistence/persistence.module';
import { UsersModule } from 'modules/users/users.module';
import { UserController } from 'modules/users/controllers/users.controller';
import { UserService } from 'modules/users/services/users.service';

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

