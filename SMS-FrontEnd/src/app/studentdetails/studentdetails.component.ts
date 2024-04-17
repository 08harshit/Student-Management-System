import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

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
    private router: Router
  ) {}

  token = localStorage.getItem('token');
  httpHeaders = new HttpHeaders({
    Authorization: 'Bearer' + ' ' + this.token,
  });

  student: any;
  URL = 'http://localhost:3000/student/';
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.httpClient
      .get(`${this.URL}${id}`, { headers: this.httpHeaders })
      .subscribe(
        (response) => {
          this.student = response;
          console.log(this.student);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteStudent() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.httpClient
      .delete(`${this.URL}${id}`, { headers: this.httpHeaders })
      .subscribe(
        (response) => {
          this.student = response;
          console.log(this.student);
          this.router.navigate(['/dashboard/students']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
