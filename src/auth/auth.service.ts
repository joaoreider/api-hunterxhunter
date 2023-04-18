import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'
import { User } from 'src/user/entities/user.entity';
import { UserPayload } from './models/UserPayload';
import { UserToken } from './models/UserToken';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService){}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email)
    if (user){
      const isPasswordValid = await bcrypt.compare(password, user.password)
      if (isPasswordValid){
        return {
          ...user,
          password: undefined
        }
      }
    }
    throw new Error('Invalid email or password')

  }

  login(user: User): UserToken {
    // transforma user em JWT
    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      name: user.nome
    }

    const jwtToken = this.jwtService.sign(payload)

    return {
      access_token: jwtToken
    }
  }
}
