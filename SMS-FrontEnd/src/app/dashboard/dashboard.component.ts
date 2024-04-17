import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CreateStudentComponent } from '../create-student/create-student.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(private httpClient: HttpClient, private router: Router) {}

  logOut() {
    console.log('jwt token:', localStorage.getItem('token'));
    localStorage.removeItem('token');
    console.log('jwt token:', localStorage.getItem('token'));
    this.router.navigate(['/login']);
  }
}
