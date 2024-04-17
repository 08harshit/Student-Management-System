import { DataTypes } from 'sequelize';
import { Column, Table, Model } from 'sequelize-typescript';

export interface AdminModel {
  email: string;
  password: string;
}

@Table({
  modelName: 'Admin',
  tableName: 'Admin',
})
export class Admin extends Model<AdminModel> {
  @Column({ type: DataTypes.STRING })
  email: string;

  @Column({ type: DataTypes.STRING })
  password: string;
}
