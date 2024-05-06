import { DataTypes, NUMBER } from 'sequelize';
import { Table, Model, Column, PrimaryKey } from 'sequelize-typescript';

export interface StudentModel {
  name: string;
  email: string;
  
  branch: string;
  
  id: number;
  semester: string;
}

@Table({
  modelName: 'Student',
  tableName: 'Student',
})
export class Student extends Model<StudentModel> {
  @Column({ type: DataTypes.STRING })
  name: string;

  @Column({ type: DataTypes.STRING })
  email: string;

  @Column({ type: DataTypes.STRING })
  branch: string;

 

 
  @PrimaryKey
  @Column({ type: DataTypes.INTEGER })
  id: number;

  @Column({ type: DataTypes.STRING })
  semester: string;
}
