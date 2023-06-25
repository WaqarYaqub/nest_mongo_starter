/* eslint-disable prettier/prettier */
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { AuthLoginDto } from '../dto/auth.login.dto';
import { IStudent } from 'src/modules/students/interface/student.interface';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(authLoginDto: AuthLoginDto): Promise<IStudent> {
    const { name, password } = authLoginDto;
    const student = await this.authService.validateStudent({ name, password });
    if (!student) {
      throw new UnauthorizedException();
    }
    return student;
  }
}
