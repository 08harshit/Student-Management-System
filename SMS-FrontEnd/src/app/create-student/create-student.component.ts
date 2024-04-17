import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TmplAstIfBlockBranch } from '@angular/compiler';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css',
})
export class CreateStudentComponent {
  constructor(private httpClient: HttpClient, private router: Router) {}

  studentForm = new FormGroup({
    name: new FormControl(''),
    DOB: new FormControl(''),
    branch: new FormControl(''),
    semester: new FormControl(''),
    photo: new FormControl(''),
    id: new FormControl(''),
    email: new FormControl(''),
  });
  token = localStorage.getItem('token');
  httpHeaders = new HttpHeaders({
    Authorization: 'Bearer' + ' ' + this.token,
  });

  createStudent() {
    this.httpClient
      .post('http://localhost:3000/student', this.studentForm.value, {
        headers: this.httpHeaders,
      })
      .subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/dashboard/students']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
