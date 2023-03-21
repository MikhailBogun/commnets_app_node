'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// export interface UserInput extends Optional<UserAttributes, 'id'> {}
// export interface UserOutput extends Model<UserAttributes> {}
module.exports = (sequelize, DataTypes) => {
    class User extends sequelize_1.Model {
        static associate(models) {
            User.hasMany(models.Twit, { foreignKey: 'userId' });
        }
    }
    User.init({
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
    }, {
        sequelize: sequelize,
        modelName: "User"
    });
    // User.hasOne(Twit, { sourceKey: 'userId' });
    return User;
};
