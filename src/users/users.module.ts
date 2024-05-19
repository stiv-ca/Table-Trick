import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './users.service';
import { UserController } from './users.controller';

@Module({
  imports: [
    // MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UsersModule {}