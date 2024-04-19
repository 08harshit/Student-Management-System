import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { LoginComponent } from './login/login.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { EdtstudentComponent } from './edtstudent/edtstudent.component';
import { AccessGuard } from './accessguard.service';

export const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [AccessGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AccessGuard],
    children: [
      { path: 'students', component: StudentsComponent },
      { path: 'createstudent', component: CreateStudentComponent },
      { path: 'login', component: LoginComponent },
    ],
  },

  { path: 'createstudent', component: CreateStudentComponent },
  {
    path: 'students/:id',
    component: StudentdetailsComponent,
    children: [
      {
        path: 'students/edit/:id',
        component: EdtstudentComponent,
      },
    ],
  },

  { path: '**', redirectTo: '/login' },
];
