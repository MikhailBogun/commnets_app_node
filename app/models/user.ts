'use strict';
import { DataTypes, Model, Optional } from 'sequelize'
import db from './index';
import sequelize from 'sequelize';




interface UserAttributes {
  id: number;
  username: string;
  hashed_password: string;
  image: string;
  salt: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// export interface UserInput extends Optional<UserAttributes, 'id'> {}
// export interface UserOutput extends Model<UserAttributes> {}
module.exports = (sequelize: any, DataTypes: any) => {
class User extends Model<UserAttributes> implements UserAttributes{
  public id!: number
  public username!: string
  public hashed_password!: string
  public image!: string
  public salt!: string
  public email!: string


  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    User.hasMany(models.Twit, { foreignKey: 'userId' });

  }

}

User.init(
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
  },
  {
    sequelize: sequelize,
    modelName: "User"
    }
)




// User.hasOne(Twit, { sourceKey: 'userId' });

return User;

}

