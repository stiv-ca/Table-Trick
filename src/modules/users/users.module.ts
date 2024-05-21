import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './services/users.service';
import { UserController } from './controllers/users.controller';

@Module({
  imports: [
    // MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UsersModule {}