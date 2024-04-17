import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { AdminModule } from 'src/admin/admin.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AdminService } from 'src/admin/admin.service';

@Module({
  imports: [
    AdminModule,
    JwtModule.register({
      secret: 'SECRET',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AdminService, JwtService],
  exports: [AuthService],
})
export class AuthModule {}
