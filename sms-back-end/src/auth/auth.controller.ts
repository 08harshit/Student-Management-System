import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async logIn(@Body() authDto: CreateAuthDto) {
    try {
      const result = await this.authService.login(authDto);
      return result;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  }
}
