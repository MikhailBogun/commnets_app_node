'use strict';
import { DataTypes, Model, Optional } from 'sequelize'
import { sequelizeConnection } from './index'


interface UserAttributes {
  id: number;
  username: string;
  hashed_password: string;
  image: string;
  salt: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface UserInput extends Optional<UserAttributes, 'id'> {}
export interface UserOutput extends Model<UserAttributes> {}


const User = sequelizeConnection.define<UserOutput>(
  'Book',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },
    username: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    hashed_password: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    email: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    salt: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    image: {
      allowNull: true,
      type: DataTypes.TEXT,
    }
  }
);

export default User;
