import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    emailUser: string;

    @IsString()
    @IsNotEmpty()
    passwordUser: string;

    @IsString()
    @IsNotEmpty()
    role: string;
  }