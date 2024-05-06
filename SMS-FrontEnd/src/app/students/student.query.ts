import { QueryEntity } from '@datorama/akita';
import { StudentStore, StudentState } from './student.store';

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StudentQuery extends QueryEntity<StudentState> {
  constructor(protected studentStore: StudentStore) {
    super(studentStore);
  }
}
