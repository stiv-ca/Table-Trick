import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { User, UserDocument } from '../entities/schemas/user.schema'
import { CreateUserDto } from '../users/dto/create-user.dto';
// import * as bcrypt from 'bcrypt';

export interface UserModel {
  id: number;
  emailUser: string;
  passwordUser: string;
  role: string;
}


@Injectable()
export class UserService {

  private users:UserModel[] = []

  getUsers() {
    return this.users
  }

  getUserById(id: number) {
    const userFound = this.users.find(user => user.id === id)

    if (userFound) {
      return userFound
    } else {
      throw new Error(`User ${id} not found`)
    }
  }

  getUserByEmail(email: string): UserModel | undefined {
    return this.users.find(user => user.emailUser === email);
  }

  createUser(user : CreateUserDto): UserModel { 

    console.log(user);
    
    
    const newUser:UserModel = {
      id: this.users.length + 1,
      emailUser: user.emailUser,
      passwordUser:  user.passwordUser,
      role: user.role,
    };
    this.users.push(newUser);

    return newUser
  }
}
