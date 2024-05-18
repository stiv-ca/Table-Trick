import { Injectable } from '@nestjs/common';
import { User, UserModel } from '../../entities/models/user.model';
import { CreateUserDto } from '../dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor() {}

  async register(createUserDto: CreateUserDto): Promise<User> {
    const { emailUser, passwordUser, role } = createUserDto;

    const existingUser = await UserModel.findOne({ emailUser });
    if (existingUser) {
      throw new Error('El usuario ya existe');
    }

    const hashedPassword = await bcrypt.hash(passwordUser, 10);

    const newUser = new UserModel({
      emailUser,
      passwordUser: hashedPassword,
      role,
    });

    return await newUser.save();
  }

  async login(email: string, password: string): Promise<string> {
    try {
      const user = await UserModel.findOne({ emailUser: email });

      if (!user || !(await bcrypt.compare(password, user.passwordUser))) {
        throw new Error('Credenciales inválidas');
      }

      const token = jwt.sign({ userId: user._id, email: user.emailUser }, 'secreto', { expiresIn: '1h' });

      return token;
    } catch (error) {
      throw new Error('Credenciales inválidas');
    }
  }
}