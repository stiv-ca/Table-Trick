import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UserService } from 'users/users.service';
import * as jwt from 'jsonwebtoken'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean>{
    
    const request = context.switchToHttp().getRequest();
    const {email , password, role } = request.body;

    const user = this.userService.getUserByEmail(email);

    if (!user || user.role !== role || user.passwordUser !== password) {
    
    return false;
    }

    const token = jwt.sign({email: user.emailUser, role: user.role}, 'secret', {expiresIn: '1h'});

    request.token = token;

    return true;

  }
}
