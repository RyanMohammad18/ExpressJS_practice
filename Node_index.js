// const path= require('path');
// const myPath="E:/NodeJs/Practice/index.js";
// console.log(path.basename(myPath))
// console.log(path.dirname(myPath))
// console.log(path.extname(myPath)) 
// console.log(path.parse(myPath))

// const os =require('os');
// console.log(os.freemem());
// console.log(os.machine());
// console.log(os.cpus())

const fs = require('fs');

fs.writeFileSync('myfile.txt','Hello Programmers')
fs.appendFileSync('myfile.txt',' How are you')

const data = fs.readFileSync('myfile.txt',(err,data)=>{
    console.log(data.toString())
});
console.log('hello')