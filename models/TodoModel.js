const {sequelize, DataTypes} = require('../config/database');

const Todo = sequelize.define('Todo',{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        // field:'id'
    },
    userId:{
        
    },
    todoName:{
        type: DataTypes.STRING,
    },
    done:{
        type: DataTypes.ENUM,
        values:['done', 'doing', 'incomplete'],
        defaultValue: 'incomplete'
    }
})