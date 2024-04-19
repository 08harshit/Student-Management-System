import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  constructor(private httpClient: HttpClient) {}
  token = localStorage.getItem('token');
  httpHeaders = new HttpHeaders({
    Authorization: 'Bearer' + ' ' + this.token,
  });
  students: any = [];

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents() {
    // this.httpClient
    //   .get('http://localhost:3000/student', { headers: this.httpHeaders })
    //   .subscribe(
    //     (response) => {
    //       console.log(response);
    //       this.students = response;
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );

    this.httpClient.get('http://localhost:3000/student').subscribe(
      (response) => {
        console.log(response);
        this.students = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
