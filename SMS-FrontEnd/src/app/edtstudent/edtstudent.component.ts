import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edtstudent',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './edtstudent.component.html',
  styleUrl: './edtstudent.component.css',
})
export class EdtstudentComponent {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  editForm = new FormGroup({
    name: new FormControl(''),
    DOB: new FormControl(''),
    branch: new FormControl(''),
    semester: new FormControl(''),
    photo: new FormControl(''),
    id: new FormControl(),
    email: new FormControl(''),
  });

  token = localStorage.getItem('token');
  httpHeaders = new HttpHeaders({
    Authorization: 'Bearer' + ' ' + this.token,
  });

  URL = 'http://localhost:3000/student/';

  editStudent() {
    const id = this.activatedRoute.snapshot.params['id'];

    console.log(this.activatedRoute.snapshot.params);
    this.httpClient
      .patch(`${this.URL}${id}`, this.editForm.value, {
        headers: this.httpHeaders,
      })
      .subscribe(
        (response) => {
          console.log(id);
          console.log(response);
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.log(id);
          console.log(error);
        }
      );
  }
}
