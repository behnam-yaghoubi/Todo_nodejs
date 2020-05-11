const {sequelize, DataTypes} = require('../config/database');

const Todo = sequelize.define('Todo',{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        // field:'id'
    },
    todoName:{
        type: DataTypes.STRING,
    },
    done:{
        type: DataTypes.ENUM('done', 'doing', 'incomplete'),
        defaultValue: 'incomplete'
    }
})