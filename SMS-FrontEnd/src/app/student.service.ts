import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Student, StudentStore } from './student.store';
import { StudentState } from './student.store';
import { Observable } from 'rxjs';


@Injectable()
export class StudentService {
  constructor(private studentStore: StudentStore, private http: HttpClient) {}

  getAll():Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:3000/student').pipe(
      tap((data) => {
        this.studentStore.update({students:data});
        console.log(this.studentStore)
      })
    );
  }



  
}
