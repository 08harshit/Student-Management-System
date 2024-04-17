import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AdminService } from 'src/admin/admin.service';
import { JwtService } from '@nestjs/jwt';
import { Admin } from 'src/models/admin';

@Injectable()
export class AuthService {
  constructor(
    private adminService: AdminService,
    private jwtService: JwtService,
  ) {}

  validateToken(token: string) {
    return this.jwtService.verify(token, {
      secret: 'secret',
    });
  }

  async login(authDto: CreateAuthDto) {
    const admin = await Admin.findOne({ where: { email: authDto.email } });

    if (!admin) {
      throw new NotFoundException('Admin not found');
    }

    if (admin.password !== authDto.password) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload = { email: admin.email };
    return {
      access_token: await this.jwtService.signAsync(payload, {
        secret: 'secret',
        expiresIn: '6h',
      }),
    };
  }
}
