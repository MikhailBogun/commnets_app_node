import Sequelize from 'sequelize'



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
const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST
const dbDriver = process.env.DB_DRIVER as Sequelize.Dialect
const dbPassword = process.env.DB_PASSWORD

let db:any = {};



// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

let sequelize:any = new Sequelize.Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver
})

fs
  .readdirSync(__dirname)
  .filter((file: string) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file: any) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

console.log(typeof db.Twit)


export default db;