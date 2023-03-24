'use strict';
import { DataTypes, Model, Optional, QueryTypes } from 'sequelize'
import db from './index'



interface CommentAttributes {
  id: number;
  text: string;
  userId: number;
  twitId: number,
  parentId: number,
  image: string;
  file: string;
  count_messages: number;
  createdAt?: Date;
  updatedAt?: Date;
}


// export interface TwitInput extends Optional<TwitAttributes, 'id'> {}
// export interface TwitOutput extends Required<TwitAttributes> {}
module.exports = (sequelize: any, DataTypes: any) => {
  class Comment extends Model<CommentAttributes> implements CommentAttributes{
    public id!: number
    public userId!: number
    public twitId!: number
    public parentId!: number
    public text!: string
    public image!: string
    public count_messages!: number
    public file!: string

    // timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    static associate(models: any) {
      Comment.belongsTo(models.User, { foreignKey: 'userId' });
      Comment.belongsTo(models.Twit, { foreignKey: 'twitId' });

    }
  }
  Comment.init(
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
      twitId: {
        allowNull: true,
        type: DataTypes.UUID,
      },
      parentId: {
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
    },
    {
      timestamps: true,
      sequelize: sequelize,
      modelName: "Comment"    }
  )

  return Comment
}
