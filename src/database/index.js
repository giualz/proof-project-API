//sequelize init

const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const IpBan = require('./models/IpBan');

const connection = new Sequelize(dbConfig['development']);

IpBan.init(connection);
// IpBan.associate(connection.models)

module.exports = connection