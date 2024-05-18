import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './users/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { userSchema } from './entities/schemas/user.schema';
import { companySchema } from './entities/schemas/company.schema';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([
      { name: 'User', schema: userSchema },
      { name: 'Company', schema: companySchema }
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
