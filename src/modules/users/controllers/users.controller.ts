 import { Body, Controller, Get, Post, Query, Param, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { UserService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserModel } from '../services/users.service'
import { AuthGuard } from '../guards/auth/auth.guard';


@Controller('/users')    
export class UserController {
  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  @Get('/get-users')
  getAllUsers(): UserModel[] {
    
    return this.userService.getUsers();
  }

  @Get('/:id')
  getUser(@Param('id') id: string): UserModel {
    console.log(id);

    return this.userService.getUserById(parseInt(id));
  }


  @Get('/:email')
  // @UseGuards(AuthGuard)
  getUserByEmail(@Param('email') email: string): UserModel | undefined {
    console.log(email);
    const user = this.userService.getUserByEmail(email);
    return user;
  }


  @Post('/create-user')
  createUser(@Body() user : CreateUserDto) : UserModel {
    console.log(user);
    
    return this.userService.createUser(user);
  }
}