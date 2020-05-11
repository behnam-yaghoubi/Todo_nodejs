const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('test', 'postgres', 'behnam',{
    host: 'localhost',
    dialect:'postgres'
})
sequelize.sync({ force: false});

module.exports = {sequelize,DataTypes};