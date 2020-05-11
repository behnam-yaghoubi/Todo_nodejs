const User = require('../models/UserModel');
const User = require('../models/UserModel');

module.exports = {
    async addTodo(req, res){
        try {
            
        } catch (error) {
            res.status(500).send({
                error: `An error has occured ${error}`
            })
        }
    },
    async editTodo(req, res){
        try {
        } catch (error) {
            res.status(500).send({
                error: `An error has occured ${error}`
            })
        }
    },
    async deleteTodo(req, res){
        try {
        } catch (error) {
            res.status(500).send({
                error: `An error has occured ${error}`
            })
        }
    },
    async getAllTodo(req, res){
        try {
        } catch (error) {
            res.status(500).send({
                error: `An error has occured ${error}`
            })
        }
    }
}