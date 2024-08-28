import { Model, DataTypes } from 'sequelize';
import sequelize from '../database'; 

class Doctor extends Model {
  public id!: number;
  public name!: string;
  public specialty!: string;
}

Doctor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'doctors',
    timestamps: false,
  }
);

export default Doctor;
