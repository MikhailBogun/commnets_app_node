'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
// export interface TwitInput extends Optional<TwitAttributes, 'id'> {}
// export interface TwitOutput extends Required<TwitAttributes> {}
module.exports = (sequelize, DataTypes) => {
    class Twit extends sequelize_1.Model {
        static associate(models) {
            Twit.belongsTo(models.User, { foreignKey: 'userId' });
        }
        static getTwits(query, start_point, count) {
            return __awaiter(this, void 0, void 0, function* () {
                let db_query = ` SELECT "Twits".*, "Users"."username"
                                  FROM "Twits"
                                      LEFT JOIN "Users"
                                      ON "Twits"."userId" = "Users".id
                                  ORDER BY "Twits"."id" ASC
                                  LIMIT :limit OFFSET :offset`;
                let replacements = {
                    replacements: {
                        "limit": count,
                        "offset": start_point
                    },
                    type: sequelize_1.QueryTypes.SELECT
                };
                return yield index_1.default.sequelize.query(db_query, replacements);
            });
        }
    }
    Twit.init({
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
    }, {
        timestamps: true,
        sequelize: sequelize,
        modelName: "Twit"
    });
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
    return Twit;
};
