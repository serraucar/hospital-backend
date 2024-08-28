import { Model, DataTypes } from 'sequelize';
import sequelize from '../database'; 

class Patient extends Model {
  public id!: number;
  public name!: string;
  public age!: number;
  public address!: string;
}

Patient.init(
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
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, 
    tableName: 'patients', 
    timestamps: false, 
  }
);

export default Patient;
