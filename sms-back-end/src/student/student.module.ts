import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { AuthService } from 'src/auth/auth.service';
import { AdminService } from 'src/admin/admin.service';
import { AdminModule } from 'src/admin/admin.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [AdminModule],
  controllers: [StudentController],
  providers: [StudentService, AuthService, AdminService, JwtService],
})
export class StudentModule {}
