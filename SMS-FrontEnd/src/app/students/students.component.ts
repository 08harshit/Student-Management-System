import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable, first } from 'rxjs';
import { StudentStore } from './student.store';
import { StudentService } from './student.service';
import { Student } from './student.model';
import { StudentQuery } from './student.query';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [StudentService, StudentQuery],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  constructor(
    private httpClient: HttpClient,
    private studentService: StudentService,
    private studentQuery: StudentQuery,
    private studentStore: StudentStore
  ) {}
  token = localStorage.getItem('token');
  httpHeaders = new HttpHeaders({
    Authorization: 'Bearer' + ' ' + this.token,
  });
  students: any = [];

  students$!: Observable<Student[]>;
  ngOnInit(): void {
    // this.fetchStudents();
    this.students$ = this.studentService.getAll();

    setTimeout(() => {
      console.log(
        this.studentQuery.selectFirst().subscribe(console.log),
        'entity query'
      );
    }, 3000);
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
    // this.httpClient.get('http://localhost:3000/student').subscribe(
    //   (response) => {
    //     console.log(response);
    //     this.students = response;
    //     this.studentStore.update({response});
    //     console.log(this.studentStore);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    // return this.httpClient.get('http://localhost:3000/student').pipe(tap(data=>{this.studentStore.update(data)}));
    // console.log('data came frome new function.');
  }
}
