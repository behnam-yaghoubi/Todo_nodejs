const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');

router.post('/register',(req, res)=>{    
    userController.registerController(req, res);
});

router.post('/login', (req, res)=>{
    userController.loginController(req, res);
})


module.exports = router;