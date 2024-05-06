import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { StudentQuery } from '../students/student.query';
import { Student } from '../students/student.model';
import { StudentStore } from '../students/student.store';

@Component({
  selector: 'app-studentdetails',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './studentdetails.component.html',
  styleUrl: './studentdetails.component.css',
})
export class StudentdetailsComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
    private router: Router,
    private studentQuery: StudentQuery,
    private studentStore: StudentStore
  ) {}

  token = localStorage.getItem('token');
  httpHeaders = new HttpHeaders({
    Authorization: 'Bearer' + ' ' + this.token,
  });

  one_student: Student | undefined;
  student: any;
  URL = 'http://localhost:3000/student/';
  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    this.httpClient
      .get(`${this.URL}${id}`, { headers: this.httpHeaders })
      .subscribe(
        (response) => {
          this.student = response;
          // console.log(this.student);
          //   this.student = response;
        },
        (error) => {
          console.log(error);
        }
      );

    console.log(
      this.studentQuery.getEntity(id),
      'getEntity in student details',
      id
    );
  }
  async deleteStudent() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.httpClient
      .delete(`${this.URL}${id}`, { headers: this.httpHeaders })
      .subscribe(
        async (response) => {
          //   console.log(this.student);
          this.studentStore.remove(+id);
          setTimeout(() => {
            console.log(this.studentStore);
          }, 1000);
          // this.router.navigate(['/dashboard/students']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
