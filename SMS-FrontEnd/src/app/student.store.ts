import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface Student {
  name: string;
  email: string;
  branch: string;
  id: number;
  semester: string;
}

export interface StudentState {
  // name: string;
  // email: string;
  // branch: string;
  // id: number;
  // semester: string;
  students: Student[];
}
export function createInitialState(): StudentState {
  return { students: [] };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'students' })
export class StudentStore extends Store<StudentState> {
  constructor() {
    super(createInitialState());
  }
}
