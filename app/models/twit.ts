'use strict';
import { DataTypes, Model, Optional } from 'sequelize'
import { sequelizeConnection } from './index'


interface TwitAttributes {
  id: number;
  text: string;
  userId: number;
  image: string;
  file: string;
  count_messages: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface TwitInput extends Optional<TwitAttributes, 'id'> {}
export interface TwitOutput extends Model<TwitAttributes> {}


const User = sequelizeConnection.define<TwitOutput>(
  'Twit',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },
    text: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    userId: {
      allowNull: true,
      type: DataTypes.UUID,
    },
    file: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    count_messages: {
      allowNull: true,
      type: DataTypes.NUMBER,
    },
    image: {
      allowNull: true,
      type: DataTypes.TEXT,
    }
  }
);

export default User;
