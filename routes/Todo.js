const express = require('express');
const router = express.Router();


router.post('/Todo',(req, res)=>{    
    res.send('ok')
});

router.get('/Todo',(req, res)=>{
    res.send('get all')
})

router.put('/Todo',(req, res)=>{
    res.send('edit todo')
})

router.delete('/Todo',(req, res)=>{
    res.send('delete todo')
})

module.exports = router;
