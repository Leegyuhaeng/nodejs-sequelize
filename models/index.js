'use strict';

const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname,'..','config','config.json'))[env];
const db = {};

const sequelize = new Sequelize(config.database,config.username,config.password,config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize,Sequelize);
db.Comment = require('./comment')(sequelize,Sequelize);

// 1 대 N
db.User.hasMany(db.Comment,{ foreignKey: 'commenter', courceKey: 'id'});
db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id'});

// 1 대 1
// db.User.hasOne(db.Comment,{ foreignKey: 'commenter', courceKey: 'id'});
// db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id'});

// N 대 M
// db.User.hasMany(db.Comment,{ through : 'PostHashtag' });
// db.Comment.belongsTo(db.User, { through : 'PostHashtag' });

module.exports = db;