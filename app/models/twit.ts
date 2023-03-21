'use strict';
import { DataTypes, Model, Optional, QueryTypes } from 'sequelize'
import db from './index'
import sequelize from 'sequelize';



interface TwitAttributes {
  id: number;
  text: string;
  userId: number;
  image: string;
  file: string;
  count_messages: number;
  createdAt?: Date;
  updatedAt?: Date;
}

// export interface TwitInput extends Optional<TwitAttributes, 'id'> {}
// export interface TwitOutput extends Required<TwitAttributes> {}
module.exports = (sequelize: any, DataTypes: any) => {
  class Twit extends Model<TwitAttributes> implements TwitAttributes{
    public id!: number
    public userId!: number
    public text!: string
    public image!: string
    public count_messages!: number
    public file!: string

    // timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    static associate(models: any) {
      Twit.belongsTo(models.User, { foreignKey: 'userId' });
    }

     public static async getTwits(query:string, start_point:number, count:number) {
      let db_query:string =     ` SELECT "Twits".*, "Users"."username"
                                  FROM "Twits"
                                      LEFT JOIN "Users"
                                      ON "Twits"."userId" = "Users".id
                                  ORDER BY "Twits"."id" ASC
                                  LIMIT :limit OFFSET :offset`;
      let replacements =  {
                        replacements :
                        { 
                          "limit":count,
                          "offset" : start_point
                        },
                        type: QueryTypes.SELECT
                      };
                      
       return await db.sequelize.query(db_query,replacements)
    }
  }

  Twit.init(
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
    },
    {
      timestamps: true,
      sequelize: sequelize,
      modelName: "Twit"    }
  )

  // const Twit = sequelizeConnection.define<TwitOutput>(
  //   'Twit',
  //   {
  //     id: {
  //       allowNull: false,
  //       autoIncrement: true,
  //       primaryKey: true,
  //       type: DataTypes.UUID,
  //       unique: true,
  //     },
  //     text: {
  //       allowNull: false,
  //       type: DataTypes.TEXT,
  //     },
  //     userId: {
  //       allowNull: true,
  //       type: DataTypes.UUID,
  //     },
  //     file: {
  //       allowNull: true,
  //       type: DataTypes.TEXT,
  //     },
  //     count_messages: {
  //       allowNull: true,
  //       type: DataTypes.NUMBER,
  //     },
  //     image: {
  //       allowNull: true,
  //       type: DataTypes.TEXT,
  //     }
  //   }
  // );


  // static async getGoals(token,filter){
  //   try{
  //     let query = ``;
  //     let replacements;
  //     if(filter==="all"){
  //       query+=             ` SELECT 
  //                                 *
  //                             FROM "Users"
  //                                 LEFT JOIN "Goals"
  //                                 ON "Users".id = "Goals"."userId"
  //                             WHERE "Users"."token" = :token
  //                             ORDER BY "Goals"."complete" ASC, "Goals"."dueDate" ASC, "Goals"."priority" DESC`;
  //       replacements =  {
  //                         replacements :{"token":token},
  //                         type: sequelize.QueryTypes.SELECT
  //                       };

  //     } else {
  //         query+=             ` SELECT 
  //                                   *
  //                               FROM "Users"
  //                                   LEFT JOIN "Goals"
  //                                   ON "Users".id = "Goals"."userId"
  //                               WHERE "Users"."token" = :token AND "Goals"."complete" = :filter
  //                               ORDER BY "Goals"."complete" ASC, "Goals"."dueDate" ASC, "Goals"."priority" DESC`;
  //         replacements = {
  //                           replacements :
  //                           {
  //                             "token":token,
  //                             "filter":filter
  //                           },
  //                           type: sequelize.QueryTypes.SELECT
  //                         }

  //     }
  //     return await sequelize.query(query,replacements)
  //   } catch(e) {
  //     console.log(e);
  //     return e;
  //   }
  // }



  // Twit.belongsTo(User, { targetKey: 'id' });


  return Twit
}
