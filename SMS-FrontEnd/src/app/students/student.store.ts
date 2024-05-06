import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";
import { Student } from "./student.model";
import { Injectable } from "@angular/core";



export interface StudentState extends EntityState<Student,number>
{

}


@Injectable({providedIn:'root'})
@StoreConfig({name:'Student'})
export class StudentStore extends EntityStore<StudentState>
{
    constructor()
    {
        super();
    }
          
}