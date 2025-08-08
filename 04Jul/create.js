const fs = require('fs')
fs.writeFile('notes.txt','My first NodeJs Application',(err) =>{
    if(err){
        console.log("error in creating file",+err)
    }
    else{
        console.log("notes.txt created successfully with a initial content")
    }
})