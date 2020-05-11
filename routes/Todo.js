const express = require('express');
const router = express.Router();

const passport = require('passport');
require('../middleware/passport')(passport)

const todoController = require('../controller/todoController');


router.post('/Todo',passport.authenticate('jwt', { 
    session: false
}),(req, res)=>{    
    res.send('ok')
});

router.get('/Todo',passport.authenticate('jwt', { 
    session: false
}),(req, res)=>{
    res.send('get all')
})

router.put('/Todo',passport.authenticate('jwt', { 
    session: false
}),(req, res)=>{
    res.send('edit todo')
})

router.delete('/Todo',passport.authenticate('jwt', { 
    session: false
}),(req, res)=>{
    res.send('delete todo')
})

module.exports = router;
