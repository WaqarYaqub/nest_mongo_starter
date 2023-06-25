/* eslint-disable prettier/prettier */
import {
  Controller,
  Request,
  Post,
  Res,
  Body,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { AuthLoginDto } from '../dto/auth.login.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //   @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(
    @Request() req,
    @Res() response,
    @Body() authLoginDto: AuthLoginDto,
  ) {
    try {
      const data = await this.authService.login(authLoginDto);
      return response.status(HttpStatus.OK).json({
        message: 'Student found successfully',
        data,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
// return this.authService.login(authLoginDto);
