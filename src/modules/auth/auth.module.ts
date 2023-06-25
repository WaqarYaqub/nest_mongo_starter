/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { JwtStrategy } from './strategies/jwt_strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { StudentModule } from '../students/student.module';

@Module({
  imports: [
    StudentModule,
    PassportModule,
    JwtModule.register({
      secret: 'SECRETKEY',
      // signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [LocalStrategy, JwtStrategy, AuthService],
  exports: [AuthService],
})
export class AuthModule {}
