import { Query } from "@datorama/akita";
import { StudentStore } from "./student.store";
import { Observable } from "rxjs";


export class StudentQuery extends Query<any>
{
    constructor(private studentStore:StudentStore)
    {
        super(studentStore);
    }


   
}