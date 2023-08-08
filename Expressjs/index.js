const express = require('express');

const app = express();

app.param('id', (req,res,next,id)=>{
    const user = {
        userid: id,
        name:'Bangladesh',
    };
    req.userDetails=user;
    next();
})

app.get('/user/:id',(req,res)=>{
    console.log(req.userDetails)
    res.send('Welcome to home');
});

app.listen(3000, () =>{
    console.log('listening on port 3000')
});