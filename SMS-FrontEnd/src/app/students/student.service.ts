import { HttpClient } from "@angular/common/http";
import { StudentStore } from "./student.store";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

import { Student } from "./student.model";








@Injectable({providedIn:"root"})
export class StudentService
{
    constructor(private studentStore:StudentStore, private http:HttpClient)
    {}


    getAll (): Observable <Student[]>
    {
        return this.http.get<Student[]>('http://localhost:3000/student').pipe(
            tap((data) => {
              this.studentStore.set(data);
              console.log(this.studentStore,'from entity')
            })
          );                     
    }
} 


