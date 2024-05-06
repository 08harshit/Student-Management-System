import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { StudentStore } from '../students/student.store';
import { Student } from '../students/student.model';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css',
})
export class CreateStudentComponent {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private studentStore: StudentStore
  ) {}

  studentForm = new FormGroup({
    name: new FormControl(''),

    branch: new FormControl(''),
    semester: new FormControl(''),

    id: new FormControl(''),
    email: new FormControl(''),
  });
  token = localStorage.getItem('token');
  httpHeaders = new HttpHeaders({
    Authorization: 'Bearer' + ' ' + this.token,
  });

  createStudent() {
    const formData = this.studentForm.value;
    const studentData: any = {
      name: formData.name || '',
      branch: formData.branch || '',
      semester: formData.semester || '',
      id: formData.id || '',
      email: formData.email || '',
    };

    // this.studentStore.add([studentData]);
    // console.log(this.studentStore)

    this.httpClient
      .post('http://localhost:3000/student', this.studentForm.value, {
        headers: this.httpHeaders,
      })
      .subscribe(
        (response) => {
          this.studentStore.add([studentData]);
          console.log(response);
          this.router.navigate(['/dashboard/students']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
