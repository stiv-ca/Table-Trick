import { Module } from '@nestjs/common';
// import { AuthModuleCompanies } from 'companies/auth/auth.module';
// import { MongooseModule } from '@nestjs/mongoose';
// import { ConfigModule } from '@nestjs/config';
import { UserService } from './users/users.service';
import { UserController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // AuthModule,
    // AuthModuleCompanies,
    // ConfigModule.forRoot(),
    // MongooseModule.forRootAsync({
    //   useFactory : () => ({
    //     uri : `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`
    //   }),
    // }),
    // MongooseModule.forFeature([
    //   { name: 'User', schema: userSchema },
    //   { name: 'Company', schema: companySchema }
    // ]),
    UsersModule,
  ],
  controllers: [ UserController ],
  providers: [ UserService ],
})
export class AppModule {}
