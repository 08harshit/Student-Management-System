import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from 'src/models/student';

@Injectable()
export class StudentService {
  create(createStudentDto: CreateStudentDto) {
    return Student.create(createStudentDto);
  }

  findAll() {
    return Student.findAll();
  }

  findOne(id: number) {
    return Student.findOne({ where: { id } });
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return Student.update(updateStudentDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return Student.destroy({ where: { id } });
  }
}
