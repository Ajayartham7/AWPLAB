const{utf8}= require('buffer');

const fs = require('fs');
fs.readFile('notes.txt','utf8',(err,data) =>{
    if(err){
       
        console.error('Error reading file:',err);
    }
    else{
        console.log('file content :\n',data);
    }
})