const express = require('express');

const app = express();

const mymiddlware1 = (req,res,next)=>{
    console.log('I am logging 1')
    next();
}

const mymiddlware2 = (req,res,next)=>{
    console.log('I am logging 2')
    next();
}


app.use(mymiddlware1);
app.use(mymiddlware2);

app.get('/about',(req,res)=>{
    
    res.send('Welcome to About Page');
});

app.listen(4000, () =>{
    console.log('listening on port 4000')
});