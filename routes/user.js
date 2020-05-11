const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../middleware/passport')(passport)

const userController = require('../controller/userController');

router.post('/register',(req, res)=>{    
    console.log('register route');
    
    userController.registerController(req, res);
});

router.post('/login', (req, res)=>{
    userController.loginController(req, res);
    
})

router.post('/testjwt',passport.authenticate('jwt', { session: false}),(req, res)=>{
    // console.log(req);
    console.log('ok');
    
    res.send('ok')

})

module.exports = router;