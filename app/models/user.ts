'use strict';
import { DataTypes, Model, Optional } from 'sequelize'
import { sequelizeConnection } from '../index'


interface UserAttributes {
  id: number;
  username: string;
  image: string;
  salt: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface UserInput extends Optional<UserAttributes, 'id'> {}
export interface UserOutput extends Required<UserAttributes> {}


const User = sequelizeConnection.define<UserAttributes>(
  'Book',
  {
    id: {
      allowNull: false,
      autoIncrement: false,
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
    enail: {
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
