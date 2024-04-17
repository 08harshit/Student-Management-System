export class CreateStudentDto {
  name: string;
  id: number;
  semester: string;
  email: string;
  DOB: Date;
  branch: string;
  photo: Blob;
}
