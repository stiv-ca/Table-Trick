import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {

  @MinLength(1)
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @MinLength(1)
  @IsString()
  @IsNotEmpty()
  password: string;

  @MinLength(1)
  @IsString()
  @IsNotEmpty()
  role: string;
}
