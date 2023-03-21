"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
// const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
//   host: dbHost,
//   dialect: dbDriver
// })
// export { Sequelize, sequelizeConnection };
'use strict';
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbDriver = process.env.DB_DRIVER;
const dbPassword = process.env.DB_PASSWORD;
let db = {};
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }
let sequelize = new sequelize_1.default.Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDriver
});
fs
    .readdirSync(__dirname)
    .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})
    .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, sequelize_1.default.DataTypes);
    db[model.name] = model;
});
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = sequelize_1.default;
console.log(typeof db.Twit);
exports.default = db;
