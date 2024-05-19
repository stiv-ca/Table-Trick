import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {

    @MinLength(1)
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    emailUser: string;

    @MinLength(1)
    @IsString()
    @IsNotEmpty()
    passwordUser: string;

    @MinLength(1)
    @IsString()
    @IsNotEmpty()
    role: string;
  }